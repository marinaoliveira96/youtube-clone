import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import useRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';
import globalRouter from './routers/globalRouter';
import routes from './routes';

const app = express();

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev')); // log das coisas do browser
app.use(helmet());

// para uma rota usamos use
app.use(routes.home, globalRouter);
app.use(routes.users, useRouter);
app.use(routes.videos, videoRouter);

export default app;
