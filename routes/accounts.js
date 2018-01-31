const express = require('express');
const accountsController = require('../controllers/AccountsController');
const router = express.Router();

router.get('/', accountsController.index);
router.post('/', accountsController.authenticate);
router.get('/logout', accountsController.logout);

module.exports = router;
