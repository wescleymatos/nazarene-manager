const express = require('express');
const usersController = require('../controllers/UsersController');
const auth = require('./middlewares/auth');
const router = express.Router();

router.get('/', auth.isAdmin, usersController.index);
router.get('/list', auth.isAdmin, usersController.list);
router.get('/add', auth.isAdmin, usersController.add);
router.get('/edit/:id', auth.isAdmin, usersController.edit);
router.get('/profile/:id', auth.isAuthorize, usersController.profile);
router.get('/delete/:id', auth.isAdmin, usersController.remove);

router.post('/add', auth.isAdmin, usersController.register);
router.post('/edit/:id', auth.isAdmin, usersController.userEdit);
router.post('/changepassword/:id', auth.isAuthorize, usersController.changePassword);

module.exports = router;
