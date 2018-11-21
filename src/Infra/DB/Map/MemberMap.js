const MemberMap = (sequelize, DataTypes) => {
  return sequelize.define('members', {
    churchId: {
      type: DataTypes.INTEGER,
      field: 'church_id'
    },
    name: DataTypes.STRING,
    gender: {
      type:   DataTypes.ENUM,
      values: ['F', 'M']
    },
    status: {
      type:   DataTypes.ENUM,
      values: ['ATI', 'ARQ', 'ASS', 'CON', 'INA']
    },
    cpf: DataTypes.STRING,
    education: DataTypes.STRING,
    statusMarital: {
      field: 'status_marital',
      type:   DataTypes.ENUM,
      values: ['C', 'D', 'S', 'V']
    },
    dateMarriage: {
      field: 'date_marriage',
      type: DataTypes.DATE
    },
    birthday: DataTypes.DATE,
    dateCoversion: {
      field: 'date_coversion',
      type: DataTypes.DATE
    },
    dateBaptism: {
      field: 'date_baptism',
      type: DataTypes.DATE
    },
    phone1: DataTypes.STRING,
    phone2: DataTypes.STRING,
    zipCode: {
      field: 'zip_code',
      type: DataTypes.STRING
    },
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    complement: DataTypes.STRING,
    publicPlace: {
      field: 'public_place',
      type: DataTypes.STRING
    },
    email: DataTypes.STRING,
    pastor: DataTypes.TINYINT,
    observation: DataTypes.TEXT,
    linkFacebook: {
      field: 'link_facebook',
      type: DataTypes.STRING
    }
  });
};

module.exports = MemberMap;
