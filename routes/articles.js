const {
  getArticles,
  createArticle,
  deleteArticle,
} = require('../controllers/articles');
const auth = require('../middlewares/auth');

const express = require('express');
const router = express.Router();

router.get('/', auth, getArticles);

router.post('/', auth, createArticle);

router.delete('/:articleId', auth, deleteArticle);

module.exports = router;
