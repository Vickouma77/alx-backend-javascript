const { describe, it } = require('mocha');
const { expect } = require('chai');
const app = require('./api');

describe('Testing the API endpoint', () => {
  it('GET /', () => {
    expect(app).to.be.a('function');
  });
});
