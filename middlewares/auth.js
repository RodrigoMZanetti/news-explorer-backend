const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  const getToken = req.headers.authorization;

  if (!getToken) {
    res.status(401).send(`token não existe`);
    return;
  }

  const token = getToken.replace('Bearer ', '');

  try {
    const { NODE_ENV, JWT_SECRET } = process.env;
    const verification = jwt.verify(
      token,
      NODE_ENV === 'production' ? JWT_SECRET : 'chave-secreta-temporaria',
    );
    req.user = verification;
    next();
  } catch (err) {
    res.status(401).send({ message: 'Token inválido' });
    return;
  }
}

module.exports = auth;
