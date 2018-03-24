import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types'

import routes from '../../constants/routes';
import Home from '../home/Home';
import Users from '../users/UserList';
import Header from "../header/Header";

//TODO: Server Rendering

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header title={this.props.title} />
          <Route exact path={routes.home} component={Home} />
          <Route exact path={routes.users} component={Users} />
        </div>
      </BrowserRouter>
    );
  }
}

Router.propTypes = {
  title: PropTypes.string
};
