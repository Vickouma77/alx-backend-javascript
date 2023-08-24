const assert = require('assert');
const sinon = require('sinon');
const { describe, it } = require('mocha');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call calculateNumber', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    assert(spy.calledOnceWithExactly('SUM', 100, 20));
    spy.restore();
  });
});
