const users = require('../model/sequelize');
const { Router } = require("express");
const jwt = require("jsonwebtoken");
const passport = require("../auth/auth");

const router = Router();


router.post('/Login', (req, res, next) => {    
    passport.authenticate( 'Login', async (err, user, info) => {
            try {
                if (err || !user){
                    const error = new Error('An error occurred.');
                    return next(error);
                }
                req.login(
                    user,
                    {session : false},
                    async (error) => {
                        if(error) return next(error);
                        const body = { pseudo : user.pseudo, password: user.password};
                        const token = jwt.sign({user: body}, "monSecret");
                        return res.json({token});
                    }
                );
            } catch (error) {
                return next(error);
            }
        })(req, res, next);
}
);

module.exports = router; //pour pouvoir utiliser mes routes dans app.js