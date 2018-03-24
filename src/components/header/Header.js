import React from 'react'
import Title from './Title'
import Navbar from './Navbar'
import PropTypes from 'prop-types'

export default class Header extends React.Component{
  render(){
    return <div className={'header'}>
      <Navbar />
      <Title title={this.props.title} />
    </div>
  }
}

Header.propTypes = {
  title: PropTypes.string
};
