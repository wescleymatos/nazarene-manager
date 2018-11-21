const HistoryMap = (sequelize, DataTypes) => {
  return sequelize.define('histories', {
    memberId: {
      type: DataTypes.INTEGER,
      field: 'member_id'
    },
    kind: {
      type:   DataTypes.ENUM,
      values: ['E', 'S']
    },
    status: {
      type:   DataTypes.ENUM,
      values: ['EPF', 'ETO', 'ECO', 'ETN', 'SPM', 'SPR', 'SPO', 'SPD', 'SPN']
    },
    observation: DataTypes.STRING
  });
};

module.exports = HistoryMap;
