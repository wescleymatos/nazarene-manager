const { MemberMap, HistoryMap, db } = require('../../Infra/DB/Connection');

const getAll = () => {
  return MemberMap
    .findAll({
      attributes: ['id', 'name', 'email', 'status']
    })
    .then(members => members);
};

const getById = (id) => {
  return MemberMap
    .findOne({
      where: { id }
    })
    .then(member => member);
};

const create = (member, history) => {
  return db.transaction((transaction) => {
    return MemberMap.create(member, {transaction: t})
      .then((member) => {
        return HistoryMap.create({ ...history, memberId: member.id }, { transaction });
      });
  }).then((result) => {
    console.log(result);
  }).catch((err) => {
    throw new Error(err);
  });
};

const update = (member) => {
  return MemberMap
    .update(member, {
      where: { id : member.id }
    })
    .then(row => row);
};

module.exports = {
  getAll,
  getById,
  create,
  update
};
