const { signup, signin } = require('../controllers/users');
const express = require('express');
const router = express.Router();

router.post('/signup', signup);
router.post('/signup', signin);

module.exports = router;
