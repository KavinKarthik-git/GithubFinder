
import React from 'react'
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const Navbar =({title}) => {
    return (
      

<nav className='nav bg-primary' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
  <h1 style={{ margin: '0', color: 'white' }}>Welcome to {title}</h1>
  <ul style={{ display: 'flex', listStyleType: 'none', padding: 0, margin: 0 }}>
    <li style={{ marginRight: '10px' }}><Link to='/' style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
    <li style={{ marginRight: '10px' }}><Link to='/about' style={{ color: 'white', textDecoration: 'none' }}>About</Link></li>
  </ul>
</nav>



    )
}

Navbar.defaultProps={title:"Prop is not there"}

Navbar.propTypes={title:PropTypes.string.isRequired}

export default Navbar