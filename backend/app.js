<<<<<<< HEAD
const express = require('express')
const operateur = require('./model/sequelize');

const passport = require('passport');



const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

app.get('/getalloperators', (req, res) => 
{
  async function Into()
  {
    const AllOp = await operateur.findAll();
  
    //res.json({"Nom": "Kapkan"});
    res.json(AllOp);
  }
  return Into();
}
);

app.get('/hello', async (req, res) => {
  result = await operateur.findOne({ where: {ID: 1} })
  console.log(result.dataValues["Nom"]);
  res.send('hello')
});

app.listen(3000);
=======
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
>>>>>>> 694fc29adb7e43c473e7bef14a09edb1279f830c
