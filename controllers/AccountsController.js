const UserService = require('../src/AuthPermission/Services/UserService');
const UserKindEnum = require('../src/AuthPermission/Enums/UserKindEnum');
const EmailService = require('../src/Infra/Services/EmailService');

const index = (req, res) => {
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.render('accounts/login', {msg: ''})
};

const authenticate = async (req, res) => {
  try {
    const {email, senha} = req.body;
    const user = await UserService.authenticate(email, senha);

    if (user === null || user.active === 0) throw new Error('User invalid.');

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

const reset = (req, res) => {
  res.render('accounts/reset');
};

const resetPassword = async (req, res) => {
  try {
    const user = await UserService.getByEmail(req.body.email);

    if (user === null) throw new Error('User invalid.');

    const newPassword = Math.random().toString(36).slice(-10);
    await UserService.changePassword(user.id, newPassword, newPassword);
    console.log(newPassword);
    EmailService.send(newPassword);
    res.redirect('/accounts');
  } catch (e) {
    res.render('accounts/login', {msg: e.message});
  }
};

module.exports = {
  index,
  authenticate,
  logout,
  reset,
  resetPassword
};
