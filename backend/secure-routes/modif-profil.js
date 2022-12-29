const express = require('express');
const users = require('../model/sequelize');
const passport = require("passport");
const router = express.Router();


router.put('/modification',passport.authenticate("jwt", { session: false }),async(req,res)=>{

	//je recupere l'id de l'utilisateur qui modifie
	const id = req.body.id;

	//je modifie les informations dans ma base de données
	await users.update({...req.body}, {where: {id : id}  });



})
module.exports = router; //pour pouvoir utiliser mes routes dans app.js