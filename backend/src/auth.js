import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import passport from 'passport'
import { AuthRepository } from './repositories/auth-repository.js';

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/api/auth/google/callback",
  passReqToCallback: true
},
  async function (request, accessToken, refreshToken, profile, done) {
    try {
      const { id } = await AuthRepository.loginOauthUser({ username: profile.displayName, email: profile.email })
      return done(null, { ...profile, id: id });
    } catch (error) {
      console.log('error al guardar el usuario en la db: ', error)
      return done(error)
    }
  }
));

passport.serializeUser(function (user, done) {
  done(null, user)
})

passport.deserializeUser(function (user, done) {
  done(null, user)
})
