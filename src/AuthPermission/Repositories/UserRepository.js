const { UserMap } = require('../../Infra/DB/Connection');

const create = (newUser) => {
  return UserMap
    .create(newUser);
};

const update = (user) => {
  return UserMap
    .update(user, {
      where: { id : user.id }
    })
    .then(row => row);
};

const remove = (id) => {
  return UserMap
    .destroy({
      where: { id }
    })
    .then(row => row);
};

const getAll = () => {
  return UserMap
    .findAll({
      attributes: ['id', 'name', 'email', 'active']
    })
    .then(users => users);
};

const getByEmail = (email) => {
  return UserMap
    .findOne({
      where: {
        email
      }
    })
    .then(user => user);
};

const getById = (id) => {
  return UserMap
    .findOne({
      attributes: ['id', 'name', 'email', 'active', 'churchId', 'kind'],
      where: {
        id
      }
    })
    .then(user => user);
};

module.exports = {
  create,
  update,
  remove,
  getAll,
  getByEmail,
  getById
};
