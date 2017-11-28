const UserService = require('../src/AuthPermission/Services/UserService');

const index = (req, res) => res.render('accounts/login');

const authenticate = async (req, res) => {
  try {
    const {email, senha} = req.body;
    const user = await UserService.authenticate(email, senha);

    res.send(user);
  } catch (e) {
    res.send(e.message);
  }
};

module.exports = {
  index,
  authenticate
};
