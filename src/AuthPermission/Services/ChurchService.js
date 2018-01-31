const ChurchRepository = require('../Repositories/ChurchRepository');

const getAll = async (email, password) => {
  const churches = await ChurchRepository.getAll();

  return churches;
};

module.exports = {
  getAll
};
