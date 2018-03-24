import React from 'react'
import { Link } from 'react-router-dom'
import routes from '../../constants/routes'
//import PropTypes from 'prop-types'

export default class Navbar extends React.Component{
  render(){
    return <ul>
      <li><Link to={routes.home}>Home</Link></li>
      <li><Link to={routes.users}>Users</Link></li>
    </ul>

  }
}

// Navbar.propTypes = {
//   children: PropTypes.object
// };
