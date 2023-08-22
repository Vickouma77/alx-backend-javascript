#!/usr/bin/node

const http = require('http');
const { readFile } = require('fs');
const countStudents = require('./3-read_file_async');

const port = 1245;
const hostname = '127.0.0.1';

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    readFile(process.argv[2], 'utf-8', (err, data) => {
      if (err) {
        res.end('This is the list of our students\n');
      } else {
        countStudents(process.argv[2])
          .then((value) => {
            res.end(`Number of students: ${value.length}\n${data}`);
          })
          .catch((error) => {
            res.end(error.message);
          });
      }
    });
  }
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
