require('dotenv').config();
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  dialect: 'mysql',
  host: process.env.DB_HOST
});

const User = sequelize.define('users', {});

User.findAll({
  attributes : ['id', 'name', 'email', 'active', 'kind']
}).then(users => {
  console.log(users);
})

sequelize.authenticate().then(() => console.log('connected'));

const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');


app.set('port', (process.env.PORT || port));

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

//onde estão os templates
app.set('views', path.join(__dirname, 'views'));
//tipo de template
app.set('view engine', 'ejs');

app.get('/login', (req, res) => {
  res.render('accounts/login');
});

app.get('/', (req, res) => {
  res.render('accounts/login');
});

app.listen(app.get('port'), () => console.log('Server running...'));
