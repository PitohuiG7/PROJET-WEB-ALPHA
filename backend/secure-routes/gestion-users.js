const express = require('express');
const users = require('../model/sequelize');
const passport = require("passport");
const router = express.Router();


//banning
router.post('/users/ban', async(req,res)=> { 
    //les parametres de ma requete
    const {pseudoAdmin, pseudoBan} = req.body;

    //je verifie si l'utilisateur existe ou pas et si il est admin
    const testExist = await users.findOne({ where: {pseudo: pseudoAdmin, isAdmin : 1} });

    if(testExist){
        //je ban l'utilisateur
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
router.post('/users/unban', async(req,res)=> { 
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
router.post('/users/promote', async(req,res)=> { 
    //les parametres de ma requete
    const {pseudoAdmin, pseudoBan} = req.body;
    //je verifie toujours si l'utilisateur existe ou pas et si il est admin
    const testExist = await users.findOne({ where: {pseudo: pseudoAdmin, isAdmin : 1} });

    if(testExist){
        const promoteUser = await users.update(
            {
              isAdmin: true
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
router.post('/users/unpromote', async(req,res)=> { 
    //les parametres de ma requete
    const {pseudoAdmin, pseudoBan} = req.body;
    //je verifie toujours si l'utilisateur existe ou pas et si il est admin
    const testExist = await users.findOne({ where: {pseudo: pseudoAdmin, isAdmin : 1} });

    if(testExist){
        const unbanUser = await users.update(
            {
              isAdmin: false
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