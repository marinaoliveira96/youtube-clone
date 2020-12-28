import multer from 'multer';
import routes from './routes';

const multerVideo = multer({ dest: 'uploads/videos/' });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = 'MaTube';
  res.locals.routes = routes;
  res.locals.user = req.user || null; // se n existe será um obj vazio
  next();
};

export const uploadVideo = multerVideo.single('videoFile'); // upload um arquivo só
