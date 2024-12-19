const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const conn = require('./db/conn');
const cors = require('cors');
const mainController = require('./controllers/Main');
const Reservation = require('./models/Reservation');
const createReservation = require('./routes/create');
const db = require('./db/conn');

app.use(
    express.urlencoded({
      extended: true,
    })
);

app.use(express.json());
app.use(cors());

// routes
app.use('/', createReservation);

db
  .sync({force: true})
  .then(() => {
    app.listen(3000, () => {
      console.log('Servidor rodando na porta 3000');
    });
  })
  .catch((err) => console.log('Erro ao sincronizar o banco de dados:', err));