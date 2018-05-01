const UserKindEnum = require('../src/AuthPermission/Enums/UserKindEnum');

const index = (req, res) => {
  res.locals.pageTitle = 'Dashboard';

  const logged = req.session.user;
  let pathUrl = (logged.kind === UserKindEnum.Admin) ? 'admin' : (logged.kind === UserKindEnum.District) ? 'district' : 'church';

  res.render(`${pathUrl}/dashboard/index`, { logged });
};

module.exports = {
  index
};
