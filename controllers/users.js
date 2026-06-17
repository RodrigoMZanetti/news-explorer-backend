import { User } from '../models/users';

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

module.exports = getCurrentUser;
