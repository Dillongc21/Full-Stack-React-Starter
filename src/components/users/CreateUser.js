import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class CreateUser  extends Component {
  static propTypes = {
    createHandler: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      first: '',
      last: '',
      email: ''
    }
  }

  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  submitUser = (e) => {
    e.preventDefault();
    console.log(this.state.first);
    console.log(this.state.last);
    console.log(this.state.email);
    this.props.createHandler(this.state.first, this.state.last, this.state.email);
  };

  render() {
    return <div>
      <h2>Create User: </h2>
      <form action='' onSubmit={this.submitUser} >

        <label htmlFor='first'>First Name: </label>
        <input type='text' id={'first'} name={'first'} value={this.state.first} onChange={this.onChange} /><br />

        <label htmlFor='last'>Last Name: </label>
        <input type='text' id={'last'} name={'last'} value={this.state.last} onChange={this.onChange} /><br />

        <label htmlFor='email'>Email: </label>
        <input type='text' id={'email'} name={'email'} value={this.state.email} onChange={this.onChange} /><br />

        <button type={'submit'}>Create</button>
      </form>
    </div>

  }
}
