const express = require("express");
const cors = require("cors");
const Ventas = require('../models/Ventas')

const router = express.Router();

router.get("/", cors(), async(req, res) => {
  const result = await Ventas.find({})
  res.json(result);
});

module.exports = router;
