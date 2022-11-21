const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();

app.use(cors())
app.use(bodyParser.json())

//Connect DB
require('./drivers/driver-mongoose');

//Import Routes
const productRoutes = require('./routes/productRoutes')
const salesRoutes = require('./routes/salesRoutes')
const shoppingCartRoutes = require('./routes/shoppingCartRoutes')

//Middleware
app.use('/api/products',productRoutes)
app.use('/api/sales',salesRoutes)
app.use('/api/shoppingCart',shoppingCartRoutes)

const port = 5000;

app.listen(port, () => `Server running on port ${port}`); 