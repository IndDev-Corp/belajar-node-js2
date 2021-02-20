const User = require("../Models/User");
const Repository = require("./Repository");

const UserRepository = Object.assign(Repository, {
  model() {
    return User;
  },
});

module.exports = UserRepository;
