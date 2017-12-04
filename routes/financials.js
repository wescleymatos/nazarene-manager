const express = require('express');
const financialsController = require('../controllers/FinancialsController');
const router = express.Router();

router.get('/', financialsController.index);
router.get('/add', financialsController.add);
router.get('/edit/:id', financialsController.edit);

module.exports = router;
