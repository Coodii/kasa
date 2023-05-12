import React from 'react';
import './Gallery.css';

export default function Gallery({picture,content}) {
  return (
    <div className='gallery'>
        <img className='gallery_image' src={picture} alt='galleryImage'/>
        <p className='gallery_textContent'>{content}</p>
    </div>
  )
}
