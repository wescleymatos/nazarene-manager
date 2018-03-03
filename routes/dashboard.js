const express = require('express');
const dashboardController = require('../controllers/DashboardController');
const auth = require('./middlewares/auth');
const router = express.Router();

router.get('/', auth.isAuthorize, dashboardController.index);

module.exports = router;
