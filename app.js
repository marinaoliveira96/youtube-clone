import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import useRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';
import globalRouter from './routers/globalRouter';
import routes from './routes';
import { localsMiddleware } from './middlewares';

const app = express();

//middlewares
app.use(helmet()); // segurança
app.set('view engine', 'pug');
app.use('/uploads', express.static('uploads'));
app.use('/static', express.static('static'));
app.use(bodyParser.json()); //está ligado com autenticação
app.use(bodyParser.urlencoded({ extended: true })); //o que o usuário esta enviando
app.use(cookieParser());
app.use(morgan('dev')); // log das coisas do browser e da aplicação

// create global variables for the app

app.use(localsMiddleware);

// para as rotas usamos use
app.use(routes.home, globalRouter); // global route = home, login etc
app.use(routes.users, useRouter);
app.use(routes.videos, videoRouter);

export default app;
