const { ChurchMap } = require('../../Infra/DB/Connection');

const getAll = () => {
  return ChurchMap
    .findAll()
    .then(churches => churches);
};

module.exports = {
  getAll
};
