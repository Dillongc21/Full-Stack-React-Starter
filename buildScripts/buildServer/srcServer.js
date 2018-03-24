// require modules
import express from 'express';
import open from 'open';
import webpack from 'webpack';
import config from '../../webpack.config.dev';
import users from './apiRouters/usersRouter';
import home from './apiRouters/homeRouter';

/* eslint-disable no-console */

process.env.NODE_ENV = 'development';

// variables
const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(express.static("."));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

// Use routers
app.use('/api/users', users);
app.use('/api/', home);

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
