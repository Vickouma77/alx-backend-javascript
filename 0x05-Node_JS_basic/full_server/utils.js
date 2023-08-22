#!/usr/bin/node
const http = require('http');
const fs = require('fs');

function readDatabase(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf-8', (error, data) => {
        if (error) {
            reject(Error('Cannot load the database'));
        } else {
            resolve(data.toString().split('\n'));
        }
        });
    });
}
