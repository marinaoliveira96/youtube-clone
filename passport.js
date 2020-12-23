import passport from 'passport';
import User from './models/User';

// local authentication, meios de fazer login
// createStrategy= configured pasport-local
passport.use(User.createStrategy());

// serialize= passamos o id para o cookie
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.serializeUser());
