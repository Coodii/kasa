import React from 'react'
import './Card.css';
import { Link } from 'react-router-dom';
function Card({id, title, cover}) {
  return (
    <Link to = {`/accomodation/${id}`}>
      <div className='card'>
        <img className='cardImg' src = {cover} alt ={title}/>
        <p className='cardName'>{title}</p>
      </div>  
    </Link>
    
  )
}

export default Card