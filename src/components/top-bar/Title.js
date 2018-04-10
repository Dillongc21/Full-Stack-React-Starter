import React from 'react'
import PropTypes from 'prop-types'

export default class Title extends React.Component{
  constructor(props) {
    super(props);
    document.title = this.props.title;
  }

  render() {
    return <h1>{this.props.title}</h1>
  }
}

Title.propTypes = {
  title: PropTypes.string
};
