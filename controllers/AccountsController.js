const UserService = require('../src/AuthPermission/Services/UserService');
const UserKindEnum = require('../src/AuthPermission/Enums/UserKindEnum');

const index = (req, res) => {
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.render('accounts/login', {msg: ''})
};

const authenticate = async (req, res) => {
  try {
    const {email, senha} = req.body;
    const user = await UserService.authenticate(email, senha);

    if (user === null) throw new Error('User invalid.');

    let pathUrl = (user.kind === UserKindEnum.Admin) ? '/admin'
                  : (user.kind === UserKindEnum.District) ? '/district'
                  : '/church';

    req.session.user = user;
    res.locals.user = user;

    res.redirect(`${pathUrl}/dashboard`);
  } catch (e) {
    res.render('accounts/login', {msg: e.message});
  }
};

const logout = (req, res) => {
  req.session.destroy(err => err);
  res.redirect('/accounts');
};

module.exports = {
  index,
  authenticate,
  logout
};
