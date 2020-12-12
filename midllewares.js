import routes from './routes';

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = 'YouTube Bro';
  res.locals.routes = routes;
  next();
};
