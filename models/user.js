const mongoose = require('mongoose');
const validator = require('validator');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: 'E-mail inválido',
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

const Usuario = mongoose.model('Usuario', userSchema);

module.exports = Usuario;
