const express = require('express');
const cors = require('cors');

const app = express();

//Import Routes
const productRoutes = require('./routes/productRoutes')
const salesRoutes = require('./routes/salesRoutes')
const shoppingCartRoutes = require('./routes/shoppingCartRoutes')

app.use('/api/products',productRoutes)
app.use('/api/sales',salesRoutes)
app.use('/api/shoppingCart',shoppingCartRoutes)


const port = 5000;

app.listen(port, () => `Server running on port ${port}`);