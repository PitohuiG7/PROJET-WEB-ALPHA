const express = require('express');
const users = require('../model/sequelize');
const passport = require("passport");
const router = express.Router();


//banning
router.post('/users/ban',passport.authenticate("jwt", { session: false }), async(req,res)=> { 
    //les parametres de ma requete
    const {pseudoAdmin, pseudoBan} = req.body;

    //je verifie si l'utilisateur existe ou pas et si il est admin
    const testExist = await users.findOne({ where: {pseudo: pseudoAdmin, isAdmin : 1} });

    if(testExist){
        //je bannie l'utilisateur
        const banUser = await users.update(
            {
              isBan: true
            },
            {
              where: { pseudo : pseudoBan },
            }
          );
          res.send('L utilisateur a été banni.');
        }
    else { res.send("Cet Utilisateur n'existe pas"); }
})

//unbanning
router.post('/users/unban', passport.authenticate("jwt", { session: false }),async(req,res)=> { 
    //les parametres de ma requete
    const {pseudoAdmin, pseudoBan} = req.body;

    //je verifie toujours si l'utilisateur existe ou pas et si il est admin
    const testExist = await users.findOne({ where: {pseudo: pseudoAdmin, isAdmin : 1} });

    if(testExist){
        //je unban l'utilisateur
        const unbanUser = await users.update(
            {
              isBan: false
            },
            {
              where: { pseudo : pseudoBan },
            }
          );
          res.send('L utilisateur a été unban.');
        }
    else { res.send("Cet Utilisateur n'existe pas"); }
})


//promoting to admin
router.post('/users/promote', passport.authenticate("jwt", { session: false }),async(req,res)=> { 
    //les parametres de ma requete
    const {pseudoAdmin, pseudoBan} = req.body;
    //je verifie toujours si l'utilisateur existe ou pas et si il est admin
    const testExist = await users.findOne({ where: {pseudo: pseudoAdmin, isAdmin : 1} });

    if(testExist){
        const promoteUser = await users.update(
            {
              isAdmin: 1
            },
            {
              where: { pseudo : pseudoBan },
            }
          );
          res.send('L utilisateur a été promoté en admin.');
        }
    else { res.send("Cet Utilisateur n'existe pas"); }
})


//unpromoting
router.post('/users/unpromote', passport.authenticate("jwt", { session: false }),async(req,res)=> { 
    //les parametres de ma requete
    const {pseudoAdmin, pseudoBan} = req.body;
    //je verifie toujours si l'utilisateur existe ou pas et si il est admin
    const testExist = await users.findOne({ where: {pseudo: pseudoAdmin, isAdmin : 1} });

    if(testExist){
        const unbanUser = await users.update(
            {
              isAdmin: 0
            },
            {
              where: { pseudo : pseudoBan },
            }
          );
          res.send('L utilisateur n est plus un admin.');
        }
    else { res.send("Cet Utilisateur n'existe pas"); }
})




module.exports = router; //pour pouvoir utiliser mes routes dans app.js