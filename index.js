const { MyDAL } = require('./myDAL.js');

class AllFunctions {
  static sayHello(name) {
    if (name === undefined) { return 'Howdy stranger!'; }
    return `Hi there ${name}!`;
  }

  static myCaller(condition, callback) {
    if (condition) {
      callback();
    }
  }

  static saveUser(user, callback) {
    MyDAL.saveUser(user, callback).then(result => result, err => err);
  }
}

module.exports = AllFunctions;
