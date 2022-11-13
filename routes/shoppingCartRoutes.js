const express = require("express");
const cors = require("cors");

const router = express.Router();

//Datos locales
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

router.get("/", cors(), (req, res) => {
  let totalPrice = 0;
  
  shoppingCart.productos.forEach((product) => {
    totalPrice = totalPrice + product.amount * parseFloat(product.price);
  });

  shoppingCart["totalprice"] = totalPrice;

  res.json(shoppingCart);
});

router.post("/buy", cors(), (req, res) => {
  res.json("Comprado con exito");
});

module.exports = router;
