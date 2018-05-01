const { MemberMap, HistoryMap, db, Op } = require('../../Infra/DB/Connection');
const StatusEnum = require('../Enums/StatusEnum');

const getAll = () => {
  return MemberMap
    .findAll({
      attributes: ['id', 'name', 'email', 'status'],
      where: {
        status: {
          [Op.ne]: StatusEnum.Arquivado
        }
      }
    })
    .then(members => members);
};

const getById = (id) => {
  return MemberMap
    .findOne({
      raw: true,
      where: { id }
    })
    .then(member => member);
};

const create = (member, history) => {
  return db.transaction((t) => {
    return MemberMap.create(member, {transaction: t})
      .then((member) => {
        return HistoryMap.create({ ...history, memberId: member.id }, { transaction: t });
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

const transfer = (member, transfer) => {
  return db.transaction((t) => {
    return MemberMap.update(member, {where: {id : member.id}, transaction: t})
      .then((member) => {
        return HistoryMap.create(transfer, { transaction: t });
      });
  }).then((result) => {
    console.log(result);
  }).catch((err) => {
    throw new Error(err);
  });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  transfer
};
