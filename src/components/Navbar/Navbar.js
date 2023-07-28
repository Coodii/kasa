import React, { Component } from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <div className ='navbar'>
        <ul className='navbar_ul'>
          <li className='navbar_li' ><NavLink to='/' className ='navbarLink' >Accueil</NavLink></li>
          <li className='navbar_li' ><NavLink to='/about' className ='navbarLink'>A propos</NavLink></li>
        </ul>
      </div>
    )
  }
}



export default Navbar