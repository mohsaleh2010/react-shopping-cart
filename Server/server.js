const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./Routes/productRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/', router);

const connString = 'mongodb://localhost/react-shopping-cart';
mongoose.connect(connString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(res => console.log('connection succeded'))
    .catch(err => console.log(err))




app.listen(5000, () => {
    console.log('Server Running on Port 5000');
})