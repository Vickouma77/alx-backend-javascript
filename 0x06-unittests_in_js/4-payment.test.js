const assert = require('assert');
const sinon = require('sinon');
const { describe, it } = require('mocha');
const { stub } = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call calculateNumber', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    assert(spy.calledOnceWithExactly('SUM', 100, 20));
    spy.restore();
  });

  it('should call calculateNumber', () => {
    const stubUtils = stub(Utils, 'calculateNumber');
    stubUtils.returns(10);

    const spyConsole = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    assert(spyConsole.calledOnceWithExactly('The total is: 10'));
    assert(stubUtils.calledOnceWithExactly('SUM', 100, 20));

    spyConsole.restore();
    stubUtils.restore();
  });
});
