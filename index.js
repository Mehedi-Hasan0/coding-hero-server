const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const sideCategories = require('./data/sideCategories.json')

app.get('/', (req, res) => {
    res.send('coding api running');
});

app.get('/sideCategories', (req, res) => {
    res.send(sideCategories);
})

app.listen(port, () => {
    console.log('coding hero server is running on port:', port);
})

