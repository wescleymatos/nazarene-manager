const UserService = require('../src/AuthPermission/Services/UserService');
const ChurchService = require('../src/AuthPermission/Services/ChurchService');

const index = (req, res) => {
  res.locals.dispatch = 'Users#Index';
  res.render('admin/users/index')
};

const list = async (req, res) => {
  const users = await UserService.getAll();

  res.send(users);
};

const add = async (req, res) => {
  res.locals.pageTitle = 'Novo usuário';
  const churches = await ChurchService.getAll();

  res.render('admin/users/add', { churches });
};

const edit = async (req, res) => {
  let id = parseInt(req.params.id);
  res.locals.pageTitle = 'Editar usuário';

  const user = await UserService.getById(id);
  const churches = await ChurchService.getAll();

  res.render('admin/users/edit', { churches, user });
};

const profile = (req, res) => res.render('users/profile');

const register = (req, res) => {
  try {
    if (req.body.senha !== req.body.confirmaSenha)
      throw new Error('As senhas devem ser iguais.');

    const newUser = {
      church_id: req.body.church_id,
      name: req.body.nome,
      email: req.body.email,
      kind: req.body.tipo,
      password: req.body.senha,
    };

    UserService.register(newUser);

    res.redirect('/admin/users');
  } catch (e) {
    res.redirect('/admin/users/add');
  }
};

const userEdit = async (req, res) => {
  try {
    const user = {
      id: req.params.id,
      church_id: req.body.church_id,
      name: req.body.nome,
      email: req.body.email,
      active: req.body.active
    };

    await UserService.update(user);

    res.redirect('/admin/users');
  } catch (e) {
    res.redirect('/error/500');
  }
};

const remove = async (req, res) => {
  try {
    let id = req.params.id;
    await UserService.remove(id);

    res.send();
  } catch (e) {
    res.status(400).send(e.message);
  }
};

const changePassword = async (req, res) => {
  try {
    const {id, email, senhaAtual, senha, confirmaSenha} = req.body;
    const user = await UserService.authenticate(email, senhaAtual);

    if (user === null) throw new Error('User invalid.');

    await UserService.changePassword(id, senha, confirmaSenha);

    res.locals.msg = 'Senha atualizada com sucesso!';
    res.redirect(`/users/profile/${id}`);
  } catch (e) {
    res.render('accounts/login', {msg: e.message});
  }
};

module.exports = {
  index,
  add,
  edit,
  profile,
  register,
  list,
  userEdit,
  remove,
  changePassword
};
