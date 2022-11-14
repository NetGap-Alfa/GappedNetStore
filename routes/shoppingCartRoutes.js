const express = require("express");
const cors = require("cors");

const router = express.Router();

//#region Datos locales
const products = [
  {
    id: "GGOEAFKA087499",
    urlImagen: "https://i.blogs.es/27b569/telefono/450_1000.jpeg",
    nombre: "Android Small Removable Sticker Sheet",
    descripcion:
      "Show your Android pride by placing these 8 fun stickers on your technology products or accessories!",
    stock: 2,
    precio: "2.99",
  },
  {
    id: "GGOEAFKA087599",
    urlImagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Rubik's_cube.svg/240px-Rubik's_cube.svg.png",
    nombre: "Android Large Removable Sticker Sheet",
    descripcion:
      "Show your quirky side by placing these fun Android stickers on your personal belongings.",
    stock: 10,
    precio: "3.99",
  },
  {
    id: "GGOEAFKA087399",
    urlImagen:
      "https://olimpica.vtexassets.com/arquivos/ids/557166/Celular-XIAOMI-Redmi-Note-10-Pro-128GB-Blue.jpg",
    nombre: "Android Cellphone",
    descripcion:
      "Show your Android Cellphone pride by placing these technology products to the top",
    stock: 15,
    precio: "444.99",
  },
  {
    id: "GGOEAFKA087299",
    urlImagen:
      "https://spectrum.ieee.org/media-library/the-ibm-pc-introduced-in-august-1981.jpg?id=27044507&width=400&height=300",
    nombre: "IBM computer",
    descripcion: "IBM computer, very pricy but old AF",
    stock: 2,
    precio: "667.99",
  },
  {
    id: "GGOEAFKA087199",
    urlImagen:
      "https://www.akg.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw671f8dbf/AKG_HT300_Mic_Rear_RGB_Clipped.png?sw=556&sh=680&sm=fit",
    nombre: "PNG Microphone",
    descripcion: "No idea, i just wanted to see how a png would work",
    stock: 5,
    precio: "9.99",
  },
];

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

const shoppingCart = {
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
router.get("/", cors(), (req, res) => {
  let totalPrice = 0;

  shoppingCart.productos.forEach((product) => {
    totalPrice = totalPrice + product.amount * parseFloat(product.price);
  });

  shoppingCart["totalprice"] = totalPrice;

  res.json(shoppingCart);
});
//#endregion

//#region ADD PRODUCT TO THE CART
router.post("/addToCart", cors(), (req, res) => {
  const product = products.find((product) => product.id == req.body.productId);
  if (product != undefined) {
    const index = shoppingCart.productos.findIndex(
      (product) => product.id == req.body.productId
    );
    if (index < 0) {
      shoppingCart.productos.push({
        id: product.id,
        urlImagen: product.urlImagen,
        name: product.nombre,
        amount: req.body.amount,
        price: product.precio,
      });
    } else {
      shoppingCart.productos.find(
        (product) => product.id == req.body.productId
      ).amount = req.body.amount;
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
