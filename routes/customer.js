const express = require('express');
const {
     getAllCustomers,
     getCustomerByID, 
     saveCustomer, 
     updateCustomer,
     deleteCustomerById 
    } = require('../controllers/CustomerController');
const router = express.Router();


router.get('/', getAllCustomers);


router.get('/:id', getCustomerByID);

router.post('/', saveCustomer);


router.put('/:id', updateCustomer);

router.delete('/:id', deleteCustomerById);

module.exports = router;
