require('dotenv').config();

const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

const accounts = require('./routes/accounts');
const financials = require('./routes/financials');

app.set('port', (process.env.PORT || port));

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Routes
app.use('/', accounts);
app.use('/accounts', accounts);
app.use('/church/financials', financials);

app.listen(app.get('port'), () => 'Server running...');
