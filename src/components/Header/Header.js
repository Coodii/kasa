import React, { Component } from 'react'
import './Header.css'
import Navbar from '../Navbar/Navbar'
import logo from '../../assets/logo.png'
export class Header extends Component {
  render() {
    return (
      <header className='header'>
        <img className='header_Logo' alt='logo' src={logo}/>
        <Navbar/>
      </header>
    )
  }
}

export default Header