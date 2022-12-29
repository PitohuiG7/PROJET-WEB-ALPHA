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