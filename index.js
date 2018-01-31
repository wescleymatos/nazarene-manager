require('dotenv').config();

const path = require('path');
const elmah = require('elmah.io');
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

app.use(elmah.auto({logId: '450af847-564d-492f-b333-bcc931871ad7', application:'Nazarene Manager', version: '42.0.0'}));
app.use(session({
  secret: 'nazarene-manager',
  cookie: {
    maxAge: 20*60*1000
  }
}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(authMiddle.getUserLogged);

//Routes
app.use('/', accounts);
app.use('/accounts', accounts);
app.use('/admin/dashboard', dashboard);
app.use('/admin/users', users);
app.use('/users', users);
app.use('/members', members);


app.listen(app.get('port'), () => 'Server running...');
