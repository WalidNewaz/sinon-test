
// class AllFunctions {
//   constructor(name) {
//     this.name = name;
//   }
//
//   static sayHello(name) {
//     if (name === undefined) { return 'Howdy stranger!'; }
//     return `Hi there ${name}!`;
//   }
// }

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
}

module.exports = AllFunctions;
