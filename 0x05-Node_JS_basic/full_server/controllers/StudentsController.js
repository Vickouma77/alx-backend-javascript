#!/usr/bin/node

const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    try {
      const data = readDatabase();
      if (!data) {
        response.status(500).send('Cannot load the database');
        return;
      }

      const fields = {};
      data.forEach((student) => {
        if (!fields[student.major]) {
          fields[student.major] = [];
        }
        fields[student.major].push(student.firstName);
      });

      response.status(200).send(`This is the list of our students\n${
        Object.keys(fields).sort().map((major) => `Number of students in ${major}: ${fields[major].length}. List: ${fields[major].join(', ')}`).join('\n')}`);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static getAllStudentsByMajor(request, response) {
    try {
      const data = readDatabase();
      if (!data) {
        response.status(500).send('Cannot load the database');
        return;
      }

      const { major } = request.query;
      if (major !== 'CS' && major !== 'SWE') {
        response.status(500).send('Major parameter must be CS or SWE');
        return;
      }

      const studentsInMajor = data
        .filter((student) => student.major === major)
        .map((student) => student.firstName);

      response.status(200).send(`List: ${studentsInMajor.join(', ')}`);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
