const getCurrentUser = require('../controllers/users');
const auth = require('../middlewares/auth');

const express = require('express');
const router = express.Router();

router.get('/me', auth, getCurrentUser);

module.exports = router;
