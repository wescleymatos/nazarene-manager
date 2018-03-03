const MemberRepository = require('../src/Membership/Repositories/MemberRepository');
const KindEnum = require('../src/Membership/Enums/KindEnum');

const index = (req, res) => {
  res.locals.dispatch = 'Members#Index';
  res.render('church/members/index')
};

const add = (req, res) => {
  res.locals.dispatch = 'Members#Add';
  res.render('church/members/add');
};

const list = async (req, res) => {
  const members = await MemberRepository.getAll();
  res.send(members);
};

const edit = async (req, res) => {
  res.locals.dispatch = 'Members#Edit';
  let id = parseInt(req.params.id);

  const member = await MemberRepository.getById(id);
  res.render('church/members/edit', { member })
};

const create = async (req, res) => {
  try {
    const history = {
      kind: KindEnum.Entrada,
      status: req.body.statusEntry
    };

    const member = {
      ...req.body,
      churchId: req.session.user.churchId
    };

    await MemberRepository.create(member, history);

    res.redirect('/church/members');
  } catch (e) {
    res.redirect('/church/members/add');
  }
}

const update = (req, res) => {
  try {
    const id = parseInt(req.body.id);
    MemberRepository.update(req.body);

    res.redirect('/church/members');
  } catch (e) {
    res.redirect(`/church/members/edit/${id}`);
  }
}

module.exports = {
  index,
  add,
  edit,
  list,
  create,
  update
};
