import React from 'react'
import { useParams } from 'react-router-dom'
import accomodations from '../../data/accomadations.json';
import Collapse from '../../components/Collapse/Collapse';
import star from '../../assets/star.png';
import emptyStar from '../../assets/emptyStar.png';
import './Accomodation.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Slider from '../../components/Slider/Slider';
import Tag from '../../components/Tag/Tag';
import ErrorPage from '../ErrorPage/ErrorPage';



export default function Accomodation() {
  
  const {id} = useParams();
  const currentAccomodation = accomodations.filter(data => data.id === id)[0];
  if(currentAccomodation === undefined){
    return <ErrorPage/>
  }
  const name = currentAccomodation.host.name.split(' ');
  const rating = new Array(5).fill(undefined);
  const tags = currentAccomodation.tags;
  const accomodationsPictures = currentAccomodation.pictures;
  
  return (
    <div className='accomodation'>
      <Header/>
      <main>
        <Slider pictures = {accomodationsPictures}/>
        <div className='accomodation_content'>
          <div className='accomodation_informations'>
            <h1 className='accomodation_title'>{currentAccomodation.title}</h1>
            <h3 className='accomodation_location'>{currentAccomodation.location}</h3>
            <div className='accomodation_tags'>
              {
                tags.map((tag, index) => {
                  return (<Tag key={index} content={tag}/>)
                })
              }
            </div>
          </div>
          <div className='accomodation_hostinformations'>
            <div className='accomodation_host'>
              <div className='accomodation_hostname'>
                <p className='accomodation_hostname1'>{name[0]}</p>
                <p className='accomodation_hostname2'>{name[1]}</p>
              </div>
              <img className='accomodation_hostpicture' src={currentAccomodation.host.picture} alt='hostPic'/>
            </div>
            <div className='accomodation_rating'>
                  {rating.map((i, index) => {
                    let ratingStar = index + 1;
                    return (
                      <img className='accomodation_star' key={index} src={ratingStar <= currentAccomodation.rating ? star : emptyStar} alt= {'rating' +index}/>
                    )
                  })}
            </div>
          </div>
        </div>
        <div className='collapse_list'>
          <div className='collapse_item'>
            <Collapse title='Description' content={currentAccomodation.description}></Collapse>
          </div>
          <div className='collapse_item'>
            <Collapse title='Equipements' content={currentAccomodation.equipments}></Collapse>
          </div>
        </div>
      </main>
      <Footer/>
    </div>

  )
}
