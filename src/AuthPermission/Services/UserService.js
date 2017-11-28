const UserRepository = require('../Repositories/UserRepository');

const authenticate = async (email, password) => {
  const user = await UserRepository.getByEmailAndPass(email, password);
  if (user === null) {
    throw new Error('Invalid credencials.');
  }

  return user;
};

module.exports = {
  authenticate
}
