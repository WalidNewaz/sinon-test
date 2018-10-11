// const Mocha = require('mocha')
const { assert } = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const AllFunctions = require('../index.js');

chai.should();
chai.use(sinonChai);

describe('AllFunctions', () => {
  describe('#sayHello', () => {
    // Create a spy for the sayHello function
    let sayHelloSpy;
    before(() => {
      sayHelloSpy = sinon.spy(AllFunctions, 'sayHello');
    });
    it('Checks to make sure that proper greeting is returned when a name is not provided', () => {
      // assert.equal('Howdy stranger!', AllFunctions.sayHello());
      AllFunctions.sayHello();
      sayHelloSpy.should.have.returned('Howdy stranger!');
    });
    it('Checks to make sure that proper greeting is returned when a name is provided', () => {
      // assert.equal(true, sayHelloSpy.alwaysReturned('Hi there Darth Vader!'));
      AllFunctions.sayHello('Darth Vader');
      sayHelloSpy.should.have.returned('Hi there Darth Vader!');
    });
    after(() => {
      assert.equal(2, sayHelloSpy.callCount);
      sayHelloSpy.restore();
    });
  });
  describe('#myCaller', () => {
    it('should call the callback function', () => {
      const callback = sinon.spy();
      AllFunctions.myCaller(true, callback);
      // assert(callback.calledOnce);
      assert(callback.should.have.been.calledOnce);
    });
  });
});
