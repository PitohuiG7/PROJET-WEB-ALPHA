const express = require('express');
const sequelize = require('./model/sequelize');
const bodyParser = require('body-parser');
const passport = require('passport');
require("dotenv").config();
require("./auth/passport");
const app = express();



app.use(bodyParser.urlencoded ({ extended : false}));
app.use(bodyParser.json());

app.use('/',require('./routes/login'));
app.use('/',require('./routes/register'));
app.use('/',require('./routes/gestionUsers'));
app.use('/',require('./routes/profileConsult'));



app.use('/',require('./secure-routes/profil'));

app.listen(3000, () => { console.log('Server started')});