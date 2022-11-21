const express = require("express");
const cors = require("cors");
const Product = require("../models/Producto");
const ShoppingCart = require("../models/ShoppingCart");
const Ventas = require("../models/Ventas");

const router = express.Router();

//#region GET THE WHOLE CART
router.get("/", cors(), async (req, res) => {
  let totalPrice = 0;
  const shoppingCart = await ShoppingCart.find({});
  if (shoppingCart.length != 0) {
    shoppingCart.at(0).productos.forEach((product) => {
      totalPrice = totalPrice + product.amount * parseFloat(product.price);
    });
  }
  shoppingCart["precioTotal"] = totalPrice;

  res.json(shoppingCart);
});
//#endregion

//#region ADD PRODUCT TO THE CART
router.post("/addToCart", cors(), async (req, res) => {
  let totalPrice = 0;
  const product = await Product.findOne({ id: req.body.productId }).exec();
  if (product != null) {
    //Producto encontrado
    const shoppingCart = await ShoppingCart.find({});
    if (shoppingCart.length == 0) {
      //Carrito vacio
      const firstShopCartJson = {
        productos: [
          {
            id: product.id,
            urlImagen: product.urlImagen,
            nombre: product.nombre,
            amount: req.body.amount,
            precio: product.precio,
          },
        ],
        precioTotal: req.body.amount * parseFloat(product.precio),
      };
      const firstShopCart = new ShoppingCart(firstShopCartJson);
      firstShopCart.save();
    } else {
      //Carrito con items
      const index = shoppingCart
        .at(0)
        .productos.findIndex((product) => product.id == req.body.productId);
      if (index < 0) {
        //Producto no existe en el carrito
        shoppingCart.at(0).productos.push({
          id: product.id,
          urlImagen: product.urlImagen,
          nombre: product.nombre,
          amount: req.body.amount,
          precio: product.precio,
        });
      } else {
        //Producto existe en el carrito
        shoppingCart
          .at(0)
          .productos.find(
            (product) => product.id == req.body.productId
          ).amount = req.body.amount;
      }
      shoppingCart.at(0).productos.forEach((productInside) => {
        totalPrice =
          totalPrice + productInside.amount * parseFloat(productInside.precio);
      });
      shoppingCart.at(0).precioTotal = totalPrice;
      await ShoppingCart.findByIdAndUpdate(
        shoppingCart.at(0)._id,
        shoppingCart.at(0)
      );
    }
    res.json({ successMessage: "Agregado con exito" });
  } else {
    res.json({ errorMessage: "Not found" });
  }
});
//#endregion

//#region BUY THE CART
router.post("/buy", cors(), async (req, res) => {
  let tempProduct;
  let quantityError = undefined;
  const products = await Product.find({});
  const shoppingCart = await ShoppingCart.find({});
  const ventas = await Ventas.find({});

  if(shoppingCart.length != 0){
    shoppingCart.at(0).productos.forEach((shoppingProd) => {
      tempProduct = products.find((product) => product.id == shoppingProd.id);
      if (tempProduct.stock < shoppingProd.amount) {
        quantityError = {
          name: shoppingProd.name,
          id: shoppingProd.id,
        };
      }
    });
  
    if (quantityError != undefined) {
      res.json({
        errorMessage:
          "No tenemos stock para el siguiente item: " + quantityError.name,
        itemId: quantityError.id,
      });
    } else {
      //Push a ventas
      const newVenta = new Ventas({
        fecha: new Date(),
        idCliente: "007",
        idVenta: ""+Date.now(),
        valor: shoppingCart.at(0).precioTotal,
        confirmado: true,
        detalleCompra: shoppingCart.at(0).productos.map((product) => {
          return {
            idProducto: product.id,
            cantidad: product.amount,
          };
        }),
      });
  
      newVenta.save()
  
      //Push a productos
      shoppingCart.at(0).productos.forEach(async (shoppingProd) => {
        const spcid = shoppingProd.id;
        const prodToMod = products.find((product) => product.id == spcid);
        prodToMod.stock = "" + (parseInt(prodToMod.stock) - shoppingProd.amount);
        const tempProd = {
          "id": prodToMod.id,
          "urlImagen": prodToMod.urlImagen,
          "nombre": prodToMod.nombre,
          "descripcion": prodToMod.descripcion,
          "stock": prodToMod.stock,
          "precio": prodToMod.precio,
        };
        await Product.findOneAndUpdate({ id: prodToMod.id} ,tempProd);
      });
  
      //Vaciar shoppingCart
      await ShoppingCart.deleteOne({ _id: shoppingCart.at(0)._id });
  
      res.json({
        successMessage: "Comprado con éxito",
      });
    }
  }else{
    res.json({
      successMessage: "No tienes items en el carrito",
    });
  }

  
});
//#endregion

module.exports = router;
