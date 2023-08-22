#!/usr/bin/node

const fs = require('fs');

function countStudents(fileName) {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const lines = data.split('\n');
    const fields = {};
    let count = 0;
    for (let i = 1; i < lines.length; i += 1) {
      if (lines[i] !== '') {
        count += 1;
        const line = lines[i].split(',');
        if (!fields[line[3]]) {
          fields[line[3]] = [];
        }
        fields[line[3]].push(line[0]);
      }
    }
    console.log(`Number of students: ${count}`);
    for (const field in fields) {
      if (field) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
  });
}

module.exports = countStudents;
