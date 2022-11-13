const express = require('express');
const cors = require('cors');

const router = express.Router()
const ventas = {
  "ventas": [
    {
      "fecha": "27/09/2022",
      "idCliente": "111111",
      "idVenta": "123",
      "valor": 35,
      "confirmado": true,
      "detalleCompra": [
        {
          "idProducto": "GGOEAFKA087599",
          "cantidad": 2
        }
      ]
    },
    {
      "fecha": "28/09/2022",
      "idCliente": "22222",
      "idVenta": "234",
      "valor": 50,
      "confirmado": false,
      "detalleCompra": [
        {
          "idProducto": "GGOEAFKA087499",
          "cantidad": 2
        }
      ]
    },
    {
      "fecha": "29/09/2022",
      "idCliente": "1231",
      "idVenta": "543",
      "valor": 10,
      "confirmado": true,
      "detalleCompra": [
        {
          "idProducto": "GGOEAFKA087499",
          "cantidad": 2
        },
        {
          "idProducto": "GGOEAFKA087599",
          "cantidad": 1
        }
      ]
    }
  ]
}

router.get('/', cors(), (req, res) => {

  
res.json(ventas)

});



/*

router.get('/', cors(), (req, res) => {

    //Data de ejemplo:
    const customers = [
      {id: 1, firstName: 'sal', lastName: 'Doe'},
      {id: 2, firstName: 'sale', lastName: 'Traversy'},
      {id: 3, firstName: 'sales', lastName: 'Swanson'},
    ];
    
    res.json(customers);
});
*/








module.exports = router;