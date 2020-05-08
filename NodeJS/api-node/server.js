const express = require('express');
const mongoose = require('mongoose'); // mongoose é um ORM (Object relational mapping)
const requireDir = require('require-dir');

// Iniciando o App
const app = express();

// Iniciando o DB
mongoose.connect(
    "mongodb://localhost:27017/nodeapi"
    , { useNewUrlParser: true, useUnifiedTopology: true}
)

requireDir("./src/models");

const Product = mongoose.model('Product')

// Rotas
app.get('/', (req, res) => {
    Product.create({
        title: "Java",
        description: "Uma grande linguagem de programação",
        url: "http://java.com"
    })

    return res.send('Hello World');
})

app.listen(3333);