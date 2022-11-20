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
  
    return res.status(200).json({state:true,data:result})

  } else {
   
    res.json({ errorMessage: req.body })
  }
});

router.put("/update", async (req, res) => {

  const result = await Product.find({});
  let validar = result.filter((product) => product.id == req.body.id);

  if (validar.length != 0) {
    const id = validar[0]._id;
    const prod = req.body;
    const result = await Product.findByIdAndUpdate(id, prod);
   
    return res.status(200).json({state:true,data:result})
  } else {
    console.log(req.body.id)
    res.json({ errorMessage: "Producto no existe" })
  }
});

module.exports = router;
