const moment = require('moment');

const toPtBrFormat = (date) => moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY');

const toEnUsFormat = (date) =>  moment(date, 'DD/MM/YYYY').format('YYYY-MM-DD');

module.exports = {
  toPtBrFormat,
  toEnUsFormat
};
