import React from 'react'
import './Tag.css'
import PropTypes from 'prop-types'

function Tag({content}) {
  return (
    <div className='tag'><p className='tag_content'>{content}</p></div>
  )
}

Tag.propTypes = {
  content: PropTypes.string
}

export default Tag