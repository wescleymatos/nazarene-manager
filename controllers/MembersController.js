const index = (req, res) => res.render('church/members/index');
const add = (req, res) => res.render('church/members/add');
const edit = (req, res) => res.render('church/members/edit');

module.exports = {
  index,
  add,
  edit
};
