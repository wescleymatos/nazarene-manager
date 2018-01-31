const express = require('express');
const dashboardController = require('../controllers/DashboardController');
const auth = require('./middlewares/auth');
const router = express.Router();

router.get('/', auth.isAdmin, dashboardController.index);

module.exports = router;
