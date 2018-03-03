const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  dialect: 'mysql',
  host: process.env.DB_HOST
});

const UserMap = sequelize.import('./Map/UserMap.js');
const ChurchMap = sequelize.import('./Map/ChurchMap.js');
const MemberMap = sequelize.import('./Map/MemberMap.js');
const HistoryMap = sequelize.import('./Map/HistoryMap.js');

UserMap.belongsTo(ChurchMap, {foreignKey: 'church_id'});
MemberMap.belongsTo(ChurchMap, {foreignKey: 'church_id'});
HistoryMap.belongsTo(MemberMap, {foreignKey: 'member_id'});

module.exports = {
  UserMap,
  ChurchMap,
  MemberMap,
  HistoryMap,
  db: sequelize
};
