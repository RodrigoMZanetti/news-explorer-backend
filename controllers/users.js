const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const getCurrentUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).send({ message: 'Usuário não encontrado' });
    }
    res.send({ email: user.email, name: user.name });
  } catch (err) {
    next(err);
  }
};

const signup = async (req, res, next) => {
  const { email, password, name } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashedPassword, name });
    res.status(201).send({ email: user.email, name: user.name });
  } catch (err) {
    next(err);
    return;
  }
};

const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).select('+password');
    const { NODE_ENV, JWT_SECRET } = process.env;
    if (!user) {
      res.status(404).send({ message: 'Email ou senha incorretos' });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      res.status(404).send({ message: 'Email ou senha incorretos' });
      return;
    }

    const token = jwt.sign(
      { _id: user._id },
      NODE_ENV === 'production' ? JWT_SECRET : 'chave-secreta-temporaria',
      {
        expiresIn: '7d',
      },
    );
    res.send({ token });
  } catch (err) {
    next(err);
    return;
  }
};

module.exports = { getCurrentUser, signup, signin };
