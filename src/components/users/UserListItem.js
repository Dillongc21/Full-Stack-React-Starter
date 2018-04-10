import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class UserListItem extends Component {
  render() {

    return <tr>
      <td>
        <button onClick={() => this.props.deleteHandler(this.props.user.id)}>Delete</button>
      </td>
      <td>{this.props.user.id}</td>
      <td>{this.props.user.firstName}</td>
      <td>{this.props.user.lastName}</td>
      <td>{this.props.user.email}</td>
    </tr>
  }
}

UserListItem.propTypes = {
  user: PropTypes.object,
  deleteHandler: PropTypes.func
};
