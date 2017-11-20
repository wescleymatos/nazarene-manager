require('dotenv').config();

const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const mongoUri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-shard-00-00-pnun5.mongodb.net:27017,cluster0-shard-00-01-pnun5.mongodb.net:27017,cluster0-shard-00-02-pnun5.mongodb.net:27017/${process.env.DB_NAME}?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`;

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
  res.render('home');
});

MongoClient.connect(mongoUri, (err, db) => {
    if (err) {
        return;
    }

    app.db = db;
    app.listen(app.get('port'), () => console.log('Server running...'));
});
