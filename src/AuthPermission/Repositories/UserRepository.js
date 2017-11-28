const { UserMap } = require('../../Infra/DB/Connection');

const getAll = () => {
  return UserMap
    .findAll()
    .then(users => users);
};

const getByEmailAndPass = (email, password) => {
  return UserMap
    .findOne({
      where: {
        email, password
      }
    })
    .then(user => user);
};

module.exports = {
  getAll,
  getByEmailAndPass
}
