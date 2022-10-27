const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const sideCategories = require('./data/sideCategories.json');
const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('coding api running');
});

app.get('/sideCategories', (req, res) => {
    res.send(sideCategories);
});

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const category_courses = courses.filter(n => n.id === id);
    res.send(category_courses)
});

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(n => n.id === id);
    res.send(selectedCourse);
});

app.listen(port, () => {
    console.log('coding hero server is running on port:', port);
})