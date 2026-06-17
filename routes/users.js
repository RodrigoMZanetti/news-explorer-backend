const getCurrentUser = require('../controllers/users');

const express = require('express');
const router = express.Router();

router.get('/me', getCurrentUser);

module.exports = router;
