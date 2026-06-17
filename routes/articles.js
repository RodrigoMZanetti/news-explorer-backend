const {
  getArticles,
  createArticle,
  deleteArticle,
} = require('../controllers/articles');

const express = require('express');
const router = express.Router();

router.get('/', getArticles);

router.post('/', createArticle);

router.delete('/:articleId', deleteArticle);

module.exports = router;
