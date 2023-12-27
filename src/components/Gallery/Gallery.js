import React from 'react';
import './Gallery.css';
import PropTypes from 'prop-types'

function Gallery({picture,content}) {
  return (
    <div className='gallery'>
        <img className='gallery_image' src={picture} alt='galleryImage'/>
        <p className='gallery_textContent'>{content}</p>
    </div>
  )
}

Gallery.propTypes = {
  picture: PropTypes.node,
  content: PropTypes.string
}

export default Gallery
