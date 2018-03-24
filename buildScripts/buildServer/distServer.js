// require modules
import express from 'express'
import open from 'open'
import compression from 'compression'
import home from './apiRouters/homeRouter'
import users from './apiRouters/usersRouter'

/* eslint-disable no-console */

// variables
const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.use('/api/', home);
app.use('/api/users', users);

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
