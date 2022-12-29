const express = require('express');
const users = require('../model/sequelize');
const router = express.Router();


router.post('/register', async(req,res)=>{

	 //les informations que nous recuperons dans notre body
	const {email,pseudo,name,lastName,password} = req.body;
 
  

	//J'utilise la fonction findOne pour verifier si l'utilisateur existe déja dans ma base de données
	const testExist = await users.findOne({ where: {email : email,pseudo : pseudo} })

	if (!testExist)
	{
	try {
		//j'utilise la fonction create pour ajouter l'utilisateur dans ma base
		await users.create({...req.body});
	   res.send("OK");
	} catch(error){
		res.send("KO");
	}
} 	
		else { res.send("Cet Utilisateur existe déjà"); }
	
	
})




module.exports = router; //pour pouvoir utiliser mes routes dans app.js
