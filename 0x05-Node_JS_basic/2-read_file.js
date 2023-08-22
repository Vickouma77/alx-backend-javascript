#!/usr/bin/node

const fs = require('fs');

function countStudents(fileName) {
  try {
    const data = fs.readFileSync(fileName, 'utf8');
    const students = data.split('\n');
    let count = 0;
    let studentsList = '';
    for (const student of students) {
      if (student) {
        const fields = student.split(',');
        if (fields[3] === 'CS') {
          count += 1;
          studentsList += count === 1 ? fields[0] : `\n${fields[0]}`;
        }
      }
    }
    console.log(`Number of students: ${count}`);
    console.log(`List: ${studentsList}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
