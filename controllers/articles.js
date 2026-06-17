const Article = require('../models/article');

const getArticles = async (req, res, next) => {
  try {
    const article = await Article.find({ owner: req.user._id });
    if (!article) {
      return res.status(404).send({ message: 'Artigo não encontrado' });
    }
    res.send(article);
  } catch (err) {
    next(err);
  }
};

const createArticle = async (req, res, next) => {
  try {
    const { keyword, title, text, date, fonte, link, image } = req.body;
    const owner = req.user._id;
    const article = await Article.create({
      keyword,
      title,
      text,
      date,
      fonte,
      link,
      image,
      owner,
    });
    res.status(201).send(article);
  } catch (err) {
    next(err);
  }
};

const deleteArticle = async (req, res, next) => {
  const { articleId } = req.params;

  try {
    const article = await Article.findById(articleId);

    console.log('article:', article);
    console.log('req.user:', req.user);

    if (!article) {
      return res.status(404).send({ message: 'Artigo não encontrado' });
    }

    if (article.owner.toString() !== req.user._id) {
      return res
        .status(403)
        .send({ message: 'Você não pode excluir artigos de outro usuário' });
    }

    const deletedArticle = await Article.findByIdAndDelete(articleId);
    res.send(deletedArticle);
  } catch (err) {
    next(err);
  }
};

module.exports = { getArticles, createArticle, deleteArticle };
