import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Router from './Router';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router title={this.props.title} />
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string
};
