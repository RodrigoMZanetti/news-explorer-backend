require('dotenv').config();
const express = require('express');
const app = express();
const articles = require('./routes/articles');
const auth = require('./routes/auth');
const users = require('./routes/users');
const mongoose = require('mongoose');
const { PORT = 3000, MONGO_URI = 'mongodb://localhost:27017/newsexplorer' } =
  process.env;
const winston = require('winston');
const expressWinston = require('express-winston');
const { errors } = require('celebrate');
const noRouteMiddleware = require('./middlewares/noRoute');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use(
  expressWinston.logger({
    transports: [new winston.transports.File({ filename: 'request.log' })],
    format: winston.format.json(),
  }),
);

app.use('/users', users);
app.use('/articles', articles);
app.use('/', auth);

app.use(noRouteMiddleware);
app.use(errors());

app.use(
  expressWinston.errorLogger({
    transports: [new winston.transports.File({ filename: 'error.log' })],
    format: winston.format.json(),
  }),
);

function errorMiddleware(err, req, res, next) {
  res.status(500).send({ message: 'Ocorreu um erro' });
}

app.use(errorMiddleware);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Conection is okay');
  })
  .catch((err) => {
    console.log(`Error! ${err}`);
  });

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
