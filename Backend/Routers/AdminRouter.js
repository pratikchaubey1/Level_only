const express = require('express');
const router = express.Router();

const { adminLogin } = require('../Controllers/Admin');

// Admin login route
router.post('/login', adminLogin);

module.exports = router;
