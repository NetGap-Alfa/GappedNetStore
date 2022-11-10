const express = require('express');
const cors = require('cors');

const router = express.Router()

router.get('/', cors(), (req, res) => {

    //Data de ejemplo:
    const customers = [
      {id: 1, firstName: 'sal', lastName: 'Doe'},
      {id: 2, firstName: 'sale', lastName: 'Traversy'},
      {id: 3, firstName: 'sales', lastName: 'Swanson'},
    ];
    
    res.json(customers);
});




module.exports = router;