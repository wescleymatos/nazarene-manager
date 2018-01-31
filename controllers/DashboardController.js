const index = (req, res) => res.render('admin/dashboard/index', {logged: req.session.user});

module.exports = {
  index
};
