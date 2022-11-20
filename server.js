const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json())

//Connect DB
require('./drivers/driver-mongoose');

//Import Routes
const productRoutes = require('./routes/productRoutes')
const salesRoutes = require('./routes/salesRoutes')
const shoppingCartRoutes = require('./routes/shoppingCartRoutes')

app.use(function(req, res, next) {


    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, DELETE, PATCH");
    res.setHeader("Access-Control-Max-Age", "3600");
    res.setHeader("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    res.setHeader("Access-Control-Expose-Headers", "Location");

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, DELETE, PATCH");
    res.header("Access-Control-Max-Age", "3600");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Origin, Content-Type, Accept");
    res.header("Access-Control-Expose-Headers", "Location");
    next();
  });

//Middleware
app.use('/api/products',productRoutes)
app.use('/api/sales',salesRoutes)
app.use('/api/shoppingCart',shoppingCartRoutes)

const port = 5000;

app.listen(port, () => `Server running on port ${port}`); 