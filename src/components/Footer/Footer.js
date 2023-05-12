import React, { Component } from 'react'
import logo from '../../assets/logoWhite.png';
import './Footer.css';

export class Footer extends Component {
  render() {
    return (
      <footer>
        <img className='footer_logo' src={logo} alt='logo'/>
        <p className='footer_description'>© 2020 Kasa. All rights reserved</p>
      </footer>
    )
  }
}

export default Footer