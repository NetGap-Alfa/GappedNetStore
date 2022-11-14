const express = require('express');
const cors = require('cors');

const router = express.Router()


const products = [
  {
    "id": "GGOEAFKA087499",
    "urlImagen": "https://i.blogs.es/27b569/telefono/450_1000.jpeg",
    "nombre": "Android Small Removable Sticker Sheet",
    "descripcion": "Show your Android pride by placing these 8 fun stickers on your technology products or accessories!",
    "stock": 40,
    "precio": "2.99"
  },
  {
    "id": "GGOEAFKA087500",
    "urlImagen": "https://i.blogs.es/27b569/telefono/450_1000.jpeg",
    "nombre": "control",
    "descripcion": "Show your Android pride by placing these 8 fun stickers on your technology products or accessories!",
    "stock": 0,
    "precio": "2.99"
  },
  {
    "id": "GGOEAFKA087599",
    "urlImagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Rubik's_cube.svg/240px-Rubik's_cube.svg.png",
    "nombre": "Android Large Removable Sticker Sheet",
    "descripcion": "Show your quirky side by placing these fun Android stickers on your personal belongings.",
    "stock": 10,
    "precio": "3.99"
  },
  {
    "id": "GGOEAFKA087399",
    "urlImagen": "https://olimpica.vtexassets.com/arquivos/ids/557166/Celular-XIAOMI-Redmi-Note-10-Pro-128GB-Blue.jpg",
    "nombre": "Android Cellphone",
    "descripcion": "Show your Android Cellphone pride by placing these technology products to the top",
    "stock": 15,
    "precio": "444.99"
  },
  {
    "id": "GGOEAFKA087299",
    "urlImagen": "https://spectrum.ieee.org/media-library/the-ibm-pc-introduced-in-august-1981.jpg?id=27044507&width=400&height=300",
    "nombre": "IBM computer",
    "descripcion": "IBM computer, very pricy but old AF",
    "stock": 2,
    "precio": "667.99"
  },
  {
    "id": "GGOEAFKA087199",
    "urlImagen": "https://www.akg.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw671f8dbf/AKG_HT300_Mic_Rear_RGB_Clipped.png?sw=556&sh=680&sm=fit",
    "nombre": "PNG Microphone",
    "descripcion": "No idea, i just wanted to see how a png would work",
    "stock": 5,
    "precio": "9.99"
  }
];


router.get('/', cors(), (req, res) => {
  res.json(products);

});
router.get('/stock', cors(), (req, res) => {
  const stockp = products.filter(totalStock => totalStock.stock > 0)
  res.json(stockp);

});

router.post('/create', (req, res) => {
  const productoA = products.find(productoN => productoN.id == req.body.id);

  if (productoA != undefined) {

    res.json("El producto ya  existe");

  } else {
    products.push({
      id: req.body.id,
      urlImagen: req.body.urlImagen,
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      stock: req.body.stock,
      precio: req.body.precio,
    });
    res.json("El producto se creo");

  }
});

router.put('/', (req, res) => {
  res.send('put product');
  /*  console.log(req.body);
    console.log(req.params);
    res.send(`product ${req.params.id} update `);
    */
});





module.exports = router;