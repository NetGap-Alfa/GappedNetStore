const express = require('express');
const cors = require('cors');

const app = express();

//app.use(express.json());

app.get('/api/customers', cors(), (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});

app.get('/api/products', cors(), (req, res)  =>{

  const products = [
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
        "id": "GGOEAFKA087399",
        "urlImagen": "https://olimpica.vtexassets.com/arquivos/ids/557166/Celular-XIAOMI-Redmi-Note-10-Pro-128GB-Blue.jpg",
        "nombre": "Android Cellphone",
        "descripcion": "Show your Android Cellphone pride by placing these technology products to the top",
        "stock": "15",
        "precio": "444.99"
      },
      {
        "id": "GGOEAFKA087299",
        "urlImagen": "https://spectrum.ieee.org/media-library/the-ibm-pc-introduced-in-august-1981.jpg?id=27044507&width=400&height=300",
        "nombre": "IBM computer",
        "descripcion": "IBM computer, very pricy but old AF",
        "stock": "2",
        "precio": "667.99"
      },
      {
        "id": "GGOEAFKA087199",
        "urlImagen": "https://www.akg.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw671f8dbf/AKG_HT300_Mic_Rear_RGB_Clipped.png?sw=556&sh=680&sm=fit",
        "nombre": "PNG Microphone",
        "descripcion": "No idea, i just wanted to see how a png would work",
        "stock": "5",
        "precio": "9.99"
      }
    ];

    res.json(products);

} );

app.post('/api/createproduct/:id', (req, res) =>{
  res.send('post product');
 /* console.log(req.body);
  console.log(req.params);
    res.send(`product ${req.params.id} insert`);
    */
} );

app.put('/api/updateproduct/:id', (req, res) =>{
  res.send('put product');
/*  console.log(req.body);
  console.log(req.params);
  res.send(`product ${req.params.id} update `);
  */
} );

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);