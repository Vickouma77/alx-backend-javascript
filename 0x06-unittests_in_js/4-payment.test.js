const assert = require('assert');
const sinon = require('sinon');
const { describe, it } = require('mocha');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('check that Utils.calculateNumber is stubbed', () => {
    const spy = sinon.spy(console, 'log');
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    sendPaymentRequestToApi(100, 20);

    assert(spy.withArgs('The total is: 10').calledOnce);
    assert(stub.withArgs('SUM', 100, 20).calledOnce);
  });
});
