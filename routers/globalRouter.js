import express from 'express';
import routes from '../routes';
import { onlyPublic } from '../middlewares';
import { home, search } from '../controllers/videoController';
import {
  getJoin,
  getLogin,
  logout,
  postJoin,
  postLogin,
} from '../controllers/userController';

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, onlyPublic, logout);

export default globalRouter;
