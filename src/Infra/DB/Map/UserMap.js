const UserMap = (sequelize, DataTypes) => {
  return sequelize.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    active: DataTypes.INTEGER,
    kind: {
      type:   DataTypes.ENUM,
      values: ['A', 'D', 'I']
    }
  });
};

module.exports = UserMap;
