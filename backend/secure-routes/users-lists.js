const express = require('express');
const users = require('../model/Sequelize');
const router = express.Router();

//pour afficher tous les utilisateurs
router.post('/users/list',passport.authenticate("jwt", { session: false }), async(req,res)=> {

const {pseudoAdmin} = req.body;

const testExist = await users.findOne({ where: {email : emailAdmin, isAdmin : 1} })

//verifie si l'utilisateur existe et si c'est un admin

	if(testExist){

		const listes = await users.findAll({attributes: ['email', 'pseudo','name','lastname']});
		res.send(listes);
		}
	else { res.send("Vous n'avez pas les droits de voir la liste des utilisateurs")}

	}

)
module.exports = router;

