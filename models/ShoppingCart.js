const mongoose = require("mongoose");

const { Schema } = mongoose;

const AuthorSchema = new Schema({
  productos: [
    {
      id: {
        type: String,
        required: true,
        unique: true,
      },
      urlImagen: {
        type: String,
        required: true,
      },
      nombre: {
        type: String,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
      precio: {
        type: String,
        required: true,
      },
    },
  ],
  precioTotal: {
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model("shoppingCart", AuthorSchema);
