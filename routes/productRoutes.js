const express = require('express');
const cors = require('cors');

const router = express.Router()

router.get('/', cors(), (req, res) => {

    //Data de ejemplo:
    const customers = [
      {id: 1, firstName: 'pro', lastName: 'Doe'},
      {id: 2, firstName: 'produ', lastName: 'Traversy'},
      {id: 3, firstName: 'products', lastName: 'Swanson'},
    ];
    
    res.json(customers);
});




module.exports = router;