import React from 'react'
import './Tag.css';

function Tag({content}) {
  return (
    <div className='tag'><p className='tag_content'>{content}</p></div>
  )
}

export default Tag