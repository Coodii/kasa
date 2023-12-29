import { React, useState }from 'react'
import downArrow from '../../assets/downArrow.png'
import upArrow from '../../assets/upArrow.png'
import './Collapse.css'
import PropTypes from 'prop-types'


function Collapse({title, content}) {
    
const [isOpen, setIsOpen] = useState(true)

  return (
    <div className= 'collapse' onClick={()=> setIsOpen(!isOpen)}>
        <h3 className='collapse_title'>{title}
            <span className = 'collapse_arrow'>
                <img src= {isOpen ? downArrow : upArrow} alt ='arrow'/>
            </span>
        </h3>
            
        <div className={!isOpen ? 'collapse_content' : 'collapse_content_hidden'}>
            {Array.isArray(content) ? content.map((item, index) => {
                return (
                        <p className='content_list-item' key={index}>{item}</p>
                )
            }) : content}
        </div>
    </div>
  )
}

Collapse.propTypes = {
    title: PropTypes.string,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
      ]),
}

export default Collapse