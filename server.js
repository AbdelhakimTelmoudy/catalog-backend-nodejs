const jwt = require('jsonwebtoken');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const usersRoute = require('./routes/user');
const productsRoute = require('./routes/product');
const customersRoute = require('./routes/customer');
const { authenticateJWT } = require('./middleware/auth');


app.use(bodyParser.json());

app.use('/users', usersRoute);
app.use('/products',authenticateJWT,productsRoute);
app.use('/customers',authenticateJWT,customersRoute);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});