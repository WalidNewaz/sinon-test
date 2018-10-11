const sinon = require('sinon');

const AllFunctions = require('../../index.js');

const AllFunctionsStub = {};

AllFunctionsStub.saveUser = sinon.stub(AllFunctions, 'saveUser')
  .returns('Hi there Walid Newaz!');

// console.log('Testing stub');
// console.log(AllFunctionsStub);

module.exports = AllFunctionsStub;
