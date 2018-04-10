// require modules
import express from 'express';
import chalk from 'chalk';
import open from 'open';
import webpack from 'webpack';
import mongoose from 'mongoose';
import config from '../../webpack.config.dev';
import users from './apiRouters/usersRouter';
import home from './apiRouters/homeRouter';
require('../../database/dbHelper');

/* eslint-disable no-console */

process.env.NODE_ENV = 'development';

mongoose.connect(process.env['connectionString'], (error) => {
  if (error){
    console.log(chalk.red(error));
  }
  else {
    console.log(chalk.green('Connected to Database'));
  }
});

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
