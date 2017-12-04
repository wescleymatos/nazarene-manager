const express = require('express');
const membersController = require('../controllers/MembersController');
const router = express.Router();

router.get('/', membersController.index);
router.get('/add', membersController.add);
router.get('/edit/:id', membersController.edit);

module.exports = router;
