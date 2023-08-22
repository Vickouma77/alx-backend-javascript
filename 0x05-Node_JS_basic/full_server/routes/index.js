#!/usr/bin/node
const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

const app = express();
const port = 1245;

app.get('/', AppController.getHomepage);
app.get('/students', StudentsController.getAllStudents);
app.get('/students/:major', StudentsController.getAllStudentsByMajor);

app.listen(port, () => {
});