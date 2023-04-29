import React from 'react'
import './Card.css';

function Card({id, title}) {
  return (
    <div className='card'>
        <p className='cardName'>{title}</p>
    </div>
  )
}

export default Card