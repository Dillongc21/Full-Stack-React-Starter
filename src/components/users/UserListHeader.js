import React, { Component } from 'react'

export default class UserListHeader extends Component {
  render() {
    return <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Id</th>
        <th>First</th>
        <th>Last</th>
        <th>Email</th>
      </tr>
    </thead>
  }
}
