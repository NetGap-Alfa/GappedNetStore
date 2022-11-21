const mongoose = require('mongoose')

const { Schema } = mongoose

const AuthorSchema = new Schema({


    fecha: {
        type: String,
        required: true,

    },
    idCliente: {
        type: String,
        required: false,

    },
    idVenta: {
        type: String,
        required: true,
        unique: true
    },
    valor: {
        type: Number,
        required: true,
    },
    confirmado: {
        type: Boolean,
        required: true,
    },

    detalleCompra: [{
        idProducto: {
            type: String,
            required: true,
        },

        cantidad: {
            type: Number,
            required: true,
        },
    }]
})

module.exports = mongoose.model('sales', AuthorSchema)