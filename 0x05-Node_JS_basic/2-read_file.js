#!/usr/bin/node

const fs = require('fs');

function countStudents(path, callback) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      callback(err);
      return;
    }
    const lines = data.trim().split('\n');
    const fields = lines.map((line) => line.split(','));
    const students = fields.map((field) => ({
      firstName: field[0],
      lastName: field[1],
      age: field[2],
      field: field[3],
    }));
    students.shift();
    const csStudents = students.filter((student) => student.field === 'CS');
    const sweStudents = students.filter((student) => student.field === 'SWE');
    const csAges = csStudents.map((student) => student.age);
    const sweAges = sweStudents.map((student) => student.age);
    const response = `Number of students: ${students.length}\nNumber of students in CS: ${csStudents.length}. List: ${csAges.join(', ')}\nNumber of students in SWE: ${sweStudents.length}. List: ${sweAges.join(', ')}`;
    console.log(response);
    callback(null, response);
  });
}

module.exports = countStudents;
