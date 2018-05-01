const express = require('express');
const transfersController = require('../controllers/TransfersController');
const auth = require('./middlewares/auth');
const router = express.Router();

router.get('/', auth.isChurch, transfersController.index);

router.post('/add', auth.isChurch, transfersController.create);

module.exports = router;
