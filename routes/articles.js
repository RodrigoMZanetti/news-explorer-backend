const {
  getArticles,
  createArticle,
  deleteArticle,
} = require('../controllers/articles');
const auth = require('../middlewares/auth');
const { validateCreateArticle } = require('../middlewares/validation');

const express = require('express');
const router = express.Router();

router.get('/', auth, getArticles);

router.post('/', auth, validateCreateArticle, createArticle);

router.delete('/:articleId', auth, deleteArticle);

module.exports = router;
