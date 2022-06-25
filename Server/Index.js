const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');

//create testdb
mongoose.connect('mongodb://localhost/testdb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => console.log("Connected Succeed"))
    .catch(err => console.log(err));

//Model
const product = mongoose.model('product', new mongoose.Schema({
    id: String,
    title: String,
    price: Number
}))



const app = express();
app.use(bodyParser.json());


app.get("/products", async (req, res) => {
    const p = new product({
        id: 1,
        title: 'hmada',
        price: 20
    })
    const saveData = await p.save()
    res.send(saveData)
})

// app.get('/', (req, res) => {
//     res.send('helo world');
// })


// app.get('/about', (req, res) => {
//     res.send('Hello About');
// });

app.listen(5000, () => {
    console.log('Server Running on Port 5000');
})