const jsonServer = require('json-server');
const api = require('./api.json');

const server = jsonServer.create();
const router = jsonServer.router(api);
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3000;

server.use(middlewares);

server.post('/login', function(_req, res) {
  setTimeout(
    () =>
      res.status(200).json({
        accessToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1MDdmMWY3N2JjZjg2Y2Q3OTk0MzkwMTEiLCJpc3MiOiJNb2JpeCIsImV4cCI6MTU3NTYzODg4OSwiaWF0IjoxNTc3NzEyNDg5LCJhdWQiOiJNWFJOQm9pbGVycGxhdGUifQ.5gyWEeDypZh9fPY8KH6cVOKKJfOCbWYIHbVytAHQRKk',
        refreshToken: 'RjY2NjM5NzA2OWJjuE7c',
        expirationDate: Date.now() + 7 * 24 * 60 * 1000,
      }),
    2500,
  );
});

server.post('/register', function(_req, res) {
  setTimeout(
    () =>
      res.status(201).json({
        message: 'User successfully registered.',
      }),
    3000,
  );
});

server.post('/recover_password', function(_req, res) {
  setTimeout(
    () =>
      res.status(200).json({
        message:
          'An email with instructions was sent to your email. Reset your password to login again.',
      }),
    3000,
  );
});

server.post('/refresh_token', function(_req, res) {
  setTimeout(
    () =>
      res.status(200).json({
        accessToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1MDdmMWY3N2JjZjg2Y2Q3OTk0MzkwMTEiLCJpc3MiOiJNb2JpeCIsImV4cCI6MTU3NTYzODg4OSwiaWF0IjoxNTc3NzEyNDg5LCJhdWQiOiJNWFJOQm9pbGVycGxhdGUifQ.5gyWEeDypZh9fPY8KH6cVOKKJfOCbWYIHbVytAHQRKk',
        expirationDate: Date.now() + 7 * 24 * 60 * 1000,
      }),
    3000,
  );
});

server.use(router);

server.listen(port, () => {
  console.log(`Successfully running on port ${port}`);
});

// /* eslint consistent-return:0 import/order:0 */

// const express = require('express');
// const logger = require('./logger');

// const argv = require('./argv');
// const port = require('./port');
// const setup = require('./middlewares/frontendMiddleware');
// const isDev = process.env.NODE_ENV !== 'production';
// const ngrok =
//   (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel
//     ? require('ngrok')
//     : false;
// const { resolve } = require('path');
// const app = express();

// // If you need a backend, e.g. an API, add your custom backend-specific middleware here
// // app.use('/api', myApi);

// // In production we need to pass these values in instead of relying on webpack
// setup(app, {
//   outputPath: resolve(process.cwd(), 'build'),
//   publicPath: '/',
// });

// // get the intended host and port number, use localhost and port 3000 if not provided
// const customHost = argv.host || process.env.HOST;
// const host = customHost || null; // Let http.Server use its default IPv6/4 host
// const prettyHost = customHost || 'localhost';

// // use the gzipped bundle
// app.get('*.js', (req, res, next) => {
//   req.url = req.url + '.gz'; // eslint-disable-line
//   res.set('Content-Encoding', 'gzip');
//   next();
// });

// // Start your app.
// app.listen(port, host, async err => {
//   if (err) {
//     return logger.error(err.message);
//   }

//   // Connect to ngrok in dev mode
//   if (ngrok) {
//     let url;
//     try {
//       url = await ngrok.connect(port);
//     } catch (e) {
//       return logger.error(e);
//     }
//     logger.appStarted(port, prettyHost, url);
//   } else {
//     logger.appStarted(port, prettyHost);
//   }
// });
