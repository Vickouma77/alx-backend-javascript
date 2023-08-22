#!/usr/bin/node

class AppController {
  static getHomepage(request, response) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.send('Hello Holberton School!');
  }
}

module.exports = AppController;
