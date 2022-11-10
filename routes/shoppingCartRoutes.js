const express = require('express');
const cors = require('cors');

const router = express.Router()

router.get('/', cors(), (req, res) => {

    //Data de ejemplo:
    const customers = [
      {id: 1, firstName: 'shoppi', lastName: 'Doe'},
      {id: 2, firstName: 'shoppingC', lastName: 'Traversy'},
      {id: 3, firstName: 'shoppingCart', lastName: 'Swanson'},
    ];
    
    res.json(customers);
});




module.exports = router;