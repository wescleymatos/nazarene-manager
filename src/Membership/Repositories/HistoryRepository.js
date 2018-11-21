const { HistoryMap } = require('../../Infra/DB/Connection');

const getAllByMemberId = (memberId) => {
  return HistoryMap
    .findAll({
      where: { memberId }
    })
    .then(histories => histories);
};

module.exports = {
  getAllByMemberId
};
