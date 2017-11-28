const express = require('express');
const accountsController = require('../controllers/AccountsController');
const router = express.Router();

router.get('/', accountsController.index);
router.get('/accounts', accountsController.index);
router.post('/accounts', accountsController.authenticate);

module.exports = router;
