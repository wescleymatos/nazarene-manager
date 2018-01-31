const ChurchMap = (sequelize, DataTypes) => {
  return sequelize.define('churches', {
    name: DataTypes.STRING,
    status: {
      type:   DataTypes.ENUM,
      values: ['N', 'O']
    },
    dateOrganization: {
      field: 'date_organization',
      type: DataTypes.DATE
    },
    dateEarlyMinistry: {
      field: 'date_early_ministry',
      type: DataTypes.DATE
    },
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipCode: {
      field: 'zip_code',
      type: DataTypes.STRING
    },
    neighborhood: DataTypes.STRING,
    complement: DataTypes.STRING,
    publicPlace: {
      field: 'public_place',
      type: DataTypes.STRING
    }
  });
};

module.exports = ChurchMap;
