/* declaration du service express, de passport pour l'authentification
 et sequelize pour ma base de données*/
const express = require('express');
const users = require('../model/sequelize');
const passport = require("passport");
const router = express.Router();

router.get('/profil', passport.authenticate("jwt", { session: false }),async(req,res)=>{

	//Les parametres de ma requete
	 pseudo = req.params.pseudo;

    console.log(pseudo);

    /* je selectionne les champs nom, prénom, email et pseudo dans ma base de données 
    et je les affiche 
    */
const leProfil = await users.findOne({attributes: ['email', 'pseudo','name','lastname'],
                                     where: {pseudo : pseudo}  });

    	res.send(leProfil);
    


})
module.exports = router; //pour pouvoir utiliser mes routes dans app.js