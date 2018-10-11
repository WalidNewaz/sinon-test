class MyDAL {
  static saveUser(user, callback) {
    if (user !== undefined) {
      return Promise.resolve(callback(user));
    }
    return Promise.reject(Error('It didn\'t work'));
  }
}

module.exports = MyDAL;
