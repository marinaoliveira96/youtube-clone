import passport from 'passport';
import GithubStrategy from 'passport-github';
import { githubLoginCallback } from './controllers/userController';
import routes from './routes';
import User from './models/User'; // local authentication, meios de fazer login

// createStrategy= configured pasport-local
passport.use(User.createStrategy());

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: `http://localhost:4000${routes.githubCallback}`,
    },
    githubLoginCallback
  )
);

// serialize= passamos o id para o cookie
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
