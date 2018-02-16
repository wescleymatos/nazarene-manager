require('dotenv').config();

const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const session = require('express-session');

const authMiddle = require('./routes/middlewares/auth');
const accounts = require('./routes/accounts');
const dashboard = require('./routes/dashboard');
const users = require('./routes/users');
const members = require('./routes/members');

app.set('port', (process.env.PORT || port));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
  secret: 'nazarene-manager',
  cookie: {
    maxAge: 20*60*1000
  },
  resave: true,
  saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(authMiddle.getUserLogged);

//Routes
app.use('/', accounts);
app.use('/accounts', accounts);
app.use('/admin/dashboard', dashboard);
app.use('/church/dashboard', dashboard);
app.use('/admin/users', users);
app.use('/users', users);
app.use('/members', members);

app.listen(app.get('port'), () => 'Server running...');
