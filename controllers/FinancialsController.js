const index = (req, res) => res.render('church/financials/index');
const add = (req, res) => res.render('church/financials/add');
const edit = (req, res) => res.render('church/financials/edit');

module.exports = {
  index,
  add,
  edit
};
