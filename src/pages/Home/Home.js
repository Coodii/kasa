import React, { Component } from 'react'
import CardList from '../../components/CardList/CardList'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Home.css';
import Gallery from '../../components/Gallery/Gallery';
import homePic from '../../assets/Home.png';

export class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Header/>
        <main>
          <div className='home_gallery'>
            <Gallery picture={homePic} content={'Chez vous, partout et ailleurs'}/>
          </div>
          <div className='home_cardList'>
            <CardList/>
          </div>
        </main>
        <Footer/>
        </div>
    )
  }
}

export default Home