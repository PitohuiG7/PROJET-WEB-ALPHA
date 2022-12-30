const express = require('express');
const sequelize = require('./model/sequelize');
const bodyParser = require('body-parser');
const passport = require('passport');
require("dotenv").config();
require("./auth/passport");
const app = express();


app.use(bodyParser.urlencoded ({ extended : false}));
app.use(bodyParser.json());

//notre service de connexion
app.use('/',require('./routes/login'));

//notre service d'inscription
app.use('/',require('./routes/register'));

//notre service de consultation profil
app.use('/',require('./secure-routes/profil'));

//notre service de modification de profil 
app.use('/',require('./secure-routes/modif-profil'));

//notre service de gestion des utilisateurs
app.use('/',require('./secure-routes/gestion-users'));



//le port de notre service est 3000
app.listen(3000, () => { console.log('Server started')});