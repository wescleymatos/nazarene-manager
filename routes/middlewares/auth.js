exports.isAdmin = (req, res, next) => {
  const logged = req.session.user;
  const path = req.baseUrl;

  if (logged) {
    if (/(admin)/i.test(path) && logged.kind === 'A') {
      next();
    } else {
      res.redirect('/error/notauthorize');
    }
  } else {
    res.redirect('/accounts');
  }
};

exports.isDistrict = (req, res, next) => {
  const logged = req.session.user;
  const path = req.baseUrl;

  if (logged) {
    if (/(district)/i.test(path) && logged.kind === 'D') {
      next();
    } else {
      res.redirect('/error/notauthorize');
    }
  } else {
    res.redirect('/accounts');
  }
};

exports.isAuthorize = (req, res, next) => {
  const logged = req.session.user;

  if (logged) {
    next();
  } else {
    res.redirect('/accounts');
  }
};

exports.getUserLogged = (req, res, next) => {
  if ('user' in req.session) {
    res.locals.user = req.session.user;
  }

  next();
};
