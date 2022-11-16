const mongoose = require('mongoose')

const { Schema } = mongoose

const AuthorSchema = new Schema({

    id: {
        type: String,
        required: true,
        unique: true
    },
    urlImagen: {
        type: String,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    precio: {
        type: String,
        required: true,
    }


})

module.exports = mongoose.model('product', AuthorSchema)