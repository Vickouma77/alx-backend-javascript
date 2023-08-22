#!/usr/bin/node

const http = require('http');
const { readFile } = require('fs');

const port = 1245;
const hostname = '127.0.0.1';

const app = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    readFile(process.argv[2], 'utf-8', (err, data) => {
        if (err) {
        res.end(err.message);
        } else {
        res.end(data);
        }
    });
    }).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});