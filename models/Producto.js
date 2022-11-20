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
        required: false,
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
        type: String,
        required: true,
    },
    precio: {
        type: String,
        required: true,
    }


})

module.exports = mongoose.model('products', AuthorSchema)