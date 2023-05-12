import React, { Component } from 'react'
import CardList from '../../components/CardList/CardList'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Home.css';

export class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Header/>
        <main>
          <CardList/>
        </main>
        <Footer/>
        </div>
    )
  }
}

export default Home