/* declaration du service express, de jwt pour l'authentification et le token
 et sequelize pour ma base de données*/
const express = require("express");
const users = require('../model/sequelize');
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // je verifie si l'utlisateur existe
  const userWithEmail = await users.findOne({ where: { email : email } }).catch(
    (err) => {
      console.log("Error: ", err);
    }
  );
  

  if (!userWithEmail)
    return res
      .status(400)
      .json({ message: "Email or password does not match!" });

    // s'il existe je verifie s'il tape le bon mot de passe
  if (userWithEmail.password !== password)
    return res
      .status(400)
      .json({ message: "Email or password does not match!" });

//je cree mon token avec le mail et l'id de l'utilisateur
  const jwtToken = jwt.sign(
    { id: userWithEmail.id, email: userWithEmail.email },
    process.env.JWT_SECRET
  );

//je renvoie le token 
  res.json({ message: "Welcome Back!", token: jwtToken });
});

module.exports = router; //pour pouvoir utiliser mes routes dans app.js