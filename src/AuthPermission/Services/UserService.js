const bcrypt = require('bcrypt');
const UserRepository = require('../Repositories/UserRepository');

const authenticate = async (email, password) => {
  const user = await UserRepository.getByEmail(email);

  if (user === null)
    throw new Error('Invalid credencials.');

  return bcrypt.compare(password, user.password)
    .then(res => {
      const userResult = {
        id: user.id,
        name: user.name,
        email: user.email,
        churchId: user.churchId,
        kind: user.kind,
        active: user.active
      };

      return res ? userResult : null;
    });
};

const register = async (newUser) => {
  bcrypt.hash(newUser.password, 10)
    .then(function(hash) {
      newUser.password = hash;
      UserRepository
        .create(newUser)
        .then(users => users);
  });
};

const changePassword = async (id, password, confirmPassword) => {
  if (password !== confirmPassword)
    throw new Error('As senhas devem ser iguais.');

  bcrypt.hash(password, 10)
    .then(function(hash) {
      password = hash;
      UserRepository
        .update({id, password})
        .then(row => row);
  });
};

const getAll = async () => {
  const users = await UserRepository.getAll();

  return users;
};

const getById = async (id) => {
  const user = await UserRepository.getById(id);

  return user;
};

const update = async (user) => {
  return UserRepository
    .update(user)
    .then(row => row);
};

const remove = async (id) => {
  return UserRepository
    .remove(id)
    .then(row => row);
};

module.exports = {
  authenticate,
  register,
  getAll,
  getById,
  update,
  remove,
  changePassword
}
