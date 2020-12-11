import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import useRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';
import globalRouter from './routers/globalRouter';

const app = express();

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev')); // log das coisas do browser
app.use(helmet());

// para uma rota usamos use
app.use('/', globalRouter);
app.use('/user', useRouter);
app.use('/video', videoRouter);

export default app;
