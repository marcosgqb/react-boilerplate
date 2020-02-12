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
