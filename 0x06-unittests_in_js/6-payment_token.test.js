const { describe, it } = require('mocha');
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('Async testing with done callback', (done) => {
    getPaymentTokenFromAPI(true)
	    .then((data) => {
        expect(data).to.have.property('data');
        done();
	    });
  });
});
