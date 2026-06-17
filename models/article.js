const mongoose = require('mongoose');
const validator = require('validator');
const { Schema } = mongoose;

const articleSchema = new Schema({
  keyword: {
    type: String,
    required: true,
  },
  title: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: String, required: true },
  fonte: { type: String, required: true },
  link: {
    type: String,
    required: true,
    validate: {
      validator: (value) => validator.isURL(value),
      message: 'URL inválida',
    },
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (value) => validator.isURL(value),
      message: 'URL inválida',
    },
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true,
    select: false,
  },
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
