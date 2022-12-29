const express = require('express');
const users = require('../model/sequelize');
const passport = require("passport");
const router = express.Router();


router.put('/modification',passport.authenticate("jwt", { session: false }),async(req,res)=>{

	//la partie front qui doit m'envoyer
	const id = req.body.id;
	await users.update({...req.body}, {where: {id : id}  });






})