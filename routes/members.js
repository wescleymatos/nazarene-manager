const express = require('express');
const membersController = require('../controllers/MembersController');
const auth = require('./middlewares/auth');
const router = express.Router();

router.get('/', auth.isChurch, membersController.index);
router.get('/list', auth.isChurch, membersController.list);
router.get('/add', auth.isChurch, membersController.add);
router.get('/edit/:id', auth.isChurch, membersController.edit);

router.post('/add', auth.isChurch, membersController.create);
router.post('/edit/:id', auth.isChurch, membersController.update);

module.exports = router;
