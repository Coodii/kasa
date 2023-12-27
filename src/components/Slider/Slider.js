import React, {useState} from 'react'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import './Slider.css'
import PropTypes from 'prop-types'

function Slider({pictures}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    let showArrow = false;

    if(pictures.length > 1){
        showArrow = true
    }

    function previousPicture(){
        if(currentIndex - 1 === -1){
            setCurrentIndex(pictures.length - 1);
        }
        else {
            setCurrentIndex(currentIndex - 1);
        }
    }

    function nextPicture(){
        if(currentIndex + 1 > pictures.length - 1){
            setCurrentIndex(0);
        }
        else {
            setCurrentIndex(currentIndex + 1);
        }
    }

  return (
    <div className='slider'>
        {showArrow ? <img className= {'slider_leftArrow'} src={leftArrow} alt='leftArrow' onClick={() => previousPicture()}/>: null}
        <img className='slider_img' src={pictures[currentIndex]} alt='img'/>
        {showArrow ? <img className={'slider_rightArrow'} src={rightArrow} alt='rightArrow' onClick={() => nextPicture()} /> : null} 
    </div>
  )
}

Slider.propTypes = {
    pictures: PropTypes.array,
}

export default Slider