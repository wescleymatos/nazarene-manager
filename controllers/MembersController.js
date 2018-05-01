const MemberRepository = require('../src/Membership/Repositories/MemberRepository');
const KindEnum = require('../src/Membership/Enums/KindEnum');
const convertDate = require('../src/Shared/Utils/ConvertDate');

const index = (req, res) => {
  res.locals.dispatch = 'Members#Index';
  res.locals.pageTitle = 'Membresia'

  res.render('church/members/index');
};

const add = (req, res) => {
  res.locals.dispatch = 'Members#Add';
  res.locals.pageTitle = 'Adicionar membro'

  res.render('church/members/add');
};

const list = async (req, res) => {
  const members = await MemberRepository.getAll();
  res.send(members);
};

const edit = async (req, res) => {
  res.locals.dispatch = 'Members#Edit';
  res.locals.pageTitle = 'Editar membro'
  let id = parseInt(req.params.id);

  const result = await MemberRepository.getById(id);
  const member = {
    ...result,
    birthday: convertDate.toPtBrFormat(result.birthday),
    dateCoversion: convertDate.toPtBrFormat(result.dateCoversion),
    dateBaptism: convertDate.toPtBrFormat(result.dateBaptism)
  }

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
      churchId: req.session.user.churchId,
      birthday: convertDate.toEnUsFormat(req.body.birthday),
      dateCoversion: convertDate.toEnUsFormat(req.body.dateCoversion),
      dateBaptism: convertDate.toEnUsFormat(req.body.dateBaptism)
    };

    await MemberRepository.create(member, history);

    res.redirect('/church/members');
  } catch (e) {
    res.redirect('/church/members/add');
  }
};

const update = (req, res) => {
  try {
    const id = parseInt(req.body.id);
    MemberRepository.update({
      ...req.body,
      birthday: convertDate.toEnUsFormat(req.body.birthday),
      dateCoversion: convertDate.toEnUsFormat(req.body.dateCoversion),
      dateBaptism: convertDate.toEnUsFormat(req.body.dateBaptism)
    });

    res.redirect('/church/members');
  } catch (e) {
    res.redirect(`/church/members/edit/${id}`);
  }
};

module.exports = {
  index,
  add,
  edit,
  list,
  create,
  update
};
