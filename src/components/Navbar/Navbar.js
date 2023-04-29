import React, { Component } from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <div className ='navbar'>
        <NavLink to='/' className ='navbarLink' >Accueil</NavLink>
        <NavLink to='/about' className ='navbarLink'>A propos</NavLink>
      </div>
    )
  }
}



export default Navbar