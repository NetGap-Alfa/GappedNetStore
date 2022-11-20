const express = require("express");
const cors = require("cors");
const Product = require("../models/Producto");
const ShoppingCart = require("../models/ShoppingCart");

const router = express.Router();

const sales = {
  ventas: [
    {
      fecha: "27/09/2022",
      idCliente: "111111",
      idVenta: "123",
      valor: 35,
      confirmado: true,
      detalleCompra: [
        {
          idProducto: "GGOEAFKA087599",
          cantidad: 2,
        },
      ],
    },
  ],
};

const shoppingCartt = {
  productos: [
    {
      id: "GGOEAFKA087499",
      urlImagen: "https://i.blogs.es/27b569/telefono/450_1000.jpeg",
      name: "Android Small Removable Sticker Sheet",
      amount: 2,
      price: "2.99",
    },
    {
      id: "GGOEAFKA087599",
      urlImagen:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Rubik's_cube.svg/240px-Rubik's_cube.svg.png",
      name: "Android Large Removable Sticker Sheet",
      amount: 1,
      price: "3.99",
    },
  ],
};
//#endregion

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
          id:  product.id,
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
        totalPrice = totalPrice + productInside.amount * parseFloat(productInside.precio);
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
router.post("/buy", cors(), (req, res) => {
  let tempProduct;
  let quantityError = undefined;

  shoppingCart.productos.forEach((shoppingProd) => {
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
    sales.ventas.push({
      fecha: new Date(),
      idCliente: "" + Date.now(),
      idVenta: "0001",
      valor: shoppingCart["totalprice"],
      confirmado: true,
      detalleCompra: shoppingCart.productos.map((product) => {
        return {
          idProducto: product.id,
          cantidad: product.amount,
        };
      }),
    });

    //Push a productos
    shoppingCart.productos.forEach((shoppingProd) => {
      products.find((product) => product.id == shoppingProd.id).stock -=
        shoppingProd.amount;
    });

    //Vaciar shoppingCart
    shoppingCart.productos = [];

    res.json({
      successMessage: "Comprado con éxito",
      ventas: sales,
      productos: products,
    });
  }
});
//#endregion

module.exports = router;
