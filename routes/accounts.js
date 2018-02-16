const express = require('express');
const accountsController = require('../controllers/AccountsController');
const router = express.Router();

router.get('/', accountsController.index);
router.post('/', accountsController.authenticate);
router.get('/logout', accountsController.logout);
router.get('/reset', accountsController.reset);
router.post('/reset', accountsController.resetPassword);

module.exports = router;
