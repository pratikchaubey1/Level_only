const express = require('express');
const router = express.Router();

const { Signup } = require('../Controllers/Sigunup');
const { Login_data } = require('../Controllers/Login');

router.post('/signup', Signup);
router.post('/login', Login_data);

module.exports = router;
