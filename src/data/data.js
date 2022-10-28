export const clientsExample = {
    "clientes": [
      {
        "identificacion": "111111",
        "apellido": "Smith",
        "edad": "34",
        "dirección": {
          "calle": "21 2nd Street",
          "ciudad": "New York",
          "localidad": "NY",
          "codigo postal": "10021"
        },
        "telefono": [
          {
            "tipo": "home",
            "numero": "212 555-1234"
          },
          {
            "tipo": "fax",
            "numero": "646 555-4567"
          }
        ],
        "nombre": "John",
        "correo": "ja@prueba.com"
      },
      {
        "identificacion": "22222",
        "apellido": "Claus",
        "edad": 25,
        "dirección": {
          "calle": "21 2nd Street",
          "ciudad": "New York",
          "localidad": "NY",
          "codigo postal": "10021"
        },
        "telefono": [
          {
            "tipo": "home",
            "numero": "313 555-1234"
          },
          {
            "tipo": "fax",
            "numero": "654 555-4567"
          }
        ],
        "nombre": "Mario",
        "correo": "mas@prueba.com"
      }
    ],
    "administradores": [
      {
        "identificacion": "1231",
        "apellido": "Moreno",
        "edad": "30",
        "dirección": {
          "calle": "1 2nd Street",
          "ciudad": "New York",
          "localidad": "NY",
          "codigo postal": "10021"
        },
        "telefono": [
          {
            "tipo": "home",
            "numero": "212 444-1234"
          },
          {
            "tipo": "fax",
            "numero": "646 444-4567"
          }
        ],
        "nombre": "Judy",
        "correo": "jm@prueba.com"
      },
      {
        "identificacion": "2342",
        "apellido": "Tellez",
        "edad": 31,
        "dirección": {
          "calle": "212 2nd Street",
          "ciudad": "New York",
          "localidad": "NY",
          "codigo postal": "10021"
        },
        "telefono": [
          {
            "tipo": "home",
            "numero": "313 555-1298"
          },
          {
            "tipo": "fax",
            "numero": "654 555-9876"
          }
        ],
        "nombre": "Andres",
        "correo": "at@prueba.com"
      }
    ]
  }

export const productCartExample = {
    "productos": [
      {
        "id": "GGOEAFKA087499",
        "urlImage": "https://i.blogs.es/27b569/telefono/450_1000.jpeg",
        "amount":2,
        "name": "Android Small Removable Sticker Sheet",
        "price": "2.99"
      },
      {
        "id": "GGOEAFKA087599",
        "urlImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Rubik's_cube.svg/240px-Rubik's_cube.svg.png",
        "name": "Android Large Removable Sticker Sheet",
        "amount":1,
        "price": "3.99"
      }
    ]
}

export const productsExample = {
    "productos": [
      {
        "id": "GGOEAFKA087499",
        "urlImagen": "https://i.blogs.es/27b569/telefono/450_1000.jpeg",
        "nombre": "Android Small Removable Sticker Sheet",
        "descripcion": "Show your Android pride by placing these 8 fun stickers on your technology products or accessories!",
        "stock": "40",
        "precio": "2.99"
      },
      {
        "id": "GGOEAFKA087599",
        "urlImagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Rubik's_cube.svg/240px-Rubik's_cube.svg.png",
        "nombre": "Android Large Removable Sticker Sheet",
        "descripcion": "Show your quirky side by placing these fun Android stickers on your personal belongings.",
        "stock": "10",
        "precio": "3.99"
      },
      {
        "id": "GGOEAFKA087499",
        "urlImagen": "https://i.blogs.es/27b569/telefono/450_1000.jpeg",
        "nombre": "Android Small Removable Sticker Sheet",
        "descripcion": "Show your Android pride by placing these 8 fun stickers on your technology products or accessories!",
        "stock": "40",
        "precio": "2.99"
      },
      {
        "id": "GGOEAFKA087499",
        "urlImagen": "https://i.blogs.es/27b569/telefono/450_1000.jpeg",
        "nombre": "Android Small Removable Sticker Sheet",
        "descripcion": "Show your Android pride by placing these 8 fun stickers on your technology products or accessories!",
        "stock": "40",
        "precio": "2.99"
      },
      {
        "id": "GGOEAFKA087499",
        "urlImagen": "https://i.blogs.es/27b569/telefono/450_1000.jpeg",
        "nombre": "Android Small Removable Sticker Sheet",
        "descripcion": "Show your Android pride by placing these 8 fun stickers on your technology products or accessories!",
        "stock": "40",
        "precio": "2.99"
      }
    ]
}

export const sellsExample = {
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