#!/usr/bin/node

const express = require('express');
const app = require('../routes/index');

const port = 1245;

app.listen(port, () => {
});

module.exports = app;