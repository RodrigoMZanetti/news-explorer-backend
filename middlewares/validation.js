const { celebrate, Joi } = require('celebrate');

const validateSignUp = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6),
    name: Joi.string().required().min(2).max(30),
  }),
});

const validateSignIn = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6),
  }),
});

const validateCreateArticle = celebrate({
  body: Joi.object().keys({
    keyword: Joi.string().required(),
    title: Joi.string().required(),
    date: Joi.string().required(),
    fonte: Joi.string().required(),
    text: Joi.string().required(),

    link: Joi.string().uri().required(),
    image: Joi.string().uri().required(),
  }),
});

module.exports = { validateSignUp, validateSignIn, validateCreateArticle };
