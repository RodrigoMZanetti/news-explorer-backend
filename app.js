const express = require('express');
const app = express();
const articles = require('./routes/articles');
const auth = require('./routes/auth');
const users = require('./routes/users');
const mongoose = require('mongoose');
const { PORT = 3000 } = process.env;

app.use(express.json());

app.use('/users', users);
app.use('/articles', articles);
app.use('/', auth);

mongoose.connect('mongodb://localhost:27017/newsexplorer');

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
