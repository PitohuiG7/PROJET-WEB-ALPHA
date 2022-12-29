/* declaration de passport pour l'authentification */
const passport = require('passport');
//declaration de ma stratégie d'authentification google
const GoogleStrategy = require('passport-google-oauth2').Strategy;

/*je défini l'authentification avec google
   j'ai récupéré clientid et clientsecret dans l'identifiant api 
   que j'ai crée sur google credentials afin de permettre la connecion*/

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:5000/auth/google/callback",
  passReqToCallback: true,
},
//connexion de l'utilisateur
function(request, accessToken, refreshToken, profile, done) {
  return done(null, profile);
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});