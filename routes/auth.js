const { signup, signin } = require('../controllers/users');
const express = require('express');
const router = express.Router();
const { validateSignIn, validateSignUp } = require('../middlewares/validation');

router.post('/signup', validateSignUp, signup);
router.post('/signin', validateSignIn, signin);

module.exports = router;
