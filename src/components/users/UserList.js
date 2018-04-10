import React, { Component } from 'react'
import UserListHeader from './UserListHeader'
import UserListItem from './UserListItem'
import CreateUser from './CreateUser'
import {deleteUser, getUsers} from '../../api/users'

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      createUserSpace: 'btn',
      newUser: [{
        firstName: '',
        lastName: '',
        email: ''
      }]
    };
    this.deleteHandler = this.deleteHandler.bind(this);
    this.createHandler = this.createHandler.bind(this);
  }

  componentWillMount() {
    const userPromise = getUsers();
    userPromise.then(users => {
      this.setState({users: users});
      console.log(users);
    })
  }

  expandCreateForm() {
    this.setState({createUserSpace: 'form'})
  }

  createHandler(first, last, email) {
    this.setState({
      newUser: [{
        firstName: first,
        lastName: last,
        email: email
      }]
    });
    //postUser(this.state.newUser);
    console.log(`new user: `);
    console.log(this.state.newUser);
  }

  deleteHandler(id) {
    deleteUser(id);
    this.setState({
      users: this.state.users.filter(u => u.id !== id)
    });
  }
  render() {
    let userSpace = <div />;

    if (this.state.createUserSpace === 'btn') {
      userSpace = (<button onClick={() => this.expandCreateForm()}>Create User</button>);
    }
    else if (this.state.createUserSpace === 'form') {
      userSpace = (<CreateUser createHandler={this.createHandler} />);
    }

    return <div>
      <table>
        <UserListHeader />
        <tbody>
          {this.state.users.map((user, i) => {
            return(<UserListItem user={user} deleteHandler={this.deleteHandler} key={i} />)
          })}
        </tbody>
      </table>
      <br />
      { userSpace }
    </div>
  }
}
