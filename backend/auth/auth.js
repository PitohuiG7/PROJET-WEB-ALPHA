const sequelize = require('./model/sequelize');
const passport = require('passport');
const { ExtractJwt } = require("passport-jwt");
var localStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;

passport.use(
    'login', 
    new localStrategy({
        usernameField: 'pseudo',
        passwordField: 'password'
    }, 
    async(pseudo, password, done) => {
        try {
            const user = users.findOne({where: {pseudo: pseudo,password:password}})
            if(!user){
                return done(null,false, {message: "Bad credential/ Incorrect User"});
            }
            return done(null, user, {message: "Logged in Successfully"});
        }catch(error) {
            done(error);
        }
    }
    )
);

passport.use( 
    new JwtStrategy(
        {
            secretOrKey : "monSecret",
            jwtFromRequest: ExtractJwt.fromUrlQueryParameter('secret_token')
        }, 
        async(token, done) => {
            try {
                return done(null, token.user);
            }catch(error) {
                done(error);
            }
        }
    )
);

module.exports = passport;
