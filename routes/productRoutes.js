const express = require("express");
const cors = require("cors");
const Product = require('../models/Producto');

const router = express.Router();

router.get("/", cors(), async (req, res) => {
  const result = await Product.find({})

  res.json(result);
});

router.get("/stock", cors(), async (req, res) => {
  const result = await Product.find({});
  const stockp = result.filter((totalStock) => totalStock.stock > 0);
  res.json(stockp);
});

router.post("/create", async (req, res) => {

  const result = await Product.find({});

  let validar = result.filter((productoN) => productoN.id == req.body.id);

  if (validar.length == 0) {
    const prod = new Product(req.body);
    const result = await prod.save();
    res.send("El producto se creo");
  } else {
    res.send("El producto ya existe")

  }


});

router.put("/update", async (req, res) => {

  const result = await Product.find({});

  let validar = result.filter((product) => product.id == req.body.id);

  if (validar.length != 0) {
    const id = validar[0]._id;
    const prod = req.body;
    const result = await Product.findByIdAndUpdate(id, prod);
    res.send("Producto Actualizado con éxito");
  } else {
    res.send("Producto no existe")

  }

});

module.exports = router;
