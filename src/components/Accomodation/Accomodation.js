import React from 'react'
import { useParams } from 'react-router-dom'
import accomodations from '../../data/accomadations.json';
import Collapse from '../Collapse/Collapse';

export default function Accomodation() {
  
  const {id} = useParams();
  const currentAccomodation = accomodations.filter(data => data.id === id)[0];
  
  
  
  return (
    <div>
      <Collapse title={'Description'} content={currentAccomodation.description}></Collapse>
      <Collapse title={'Equipements'} content={currentAccomodation.equipments}></Collapse>
    </div>
  )
}
