#!/usr/bin/node

const fs = require('fs');

function countStudents(fileName) {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf-8', (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const lines = data.toString().split('\n');
        const fields = {};
        let length = 0;
        for (let i = 1; i < lines.length; i += 1) {
          if (lines[i]) {
            length += 1;
            const field = lines[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              fields[field[3]].push(field[0]);
            } else {
              fields[field[3]] = [field[0]];
            }
          }
        }
        const l = length;
        console.log(`Number of students: ${l}`);
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
          }
        }
        resolve();
      }
    });
  });
  return promise;
}

module.exports = countStudents;
