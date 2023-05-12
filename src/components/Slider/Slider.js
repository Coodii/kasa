import React, {useState} from 'react'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import './Slider.css';

function Slider({pictures}) {
    const [currentIndex, getIndex] = useState(0);

    function previousPicture(){
        if(currentIndex - 1 === -1){
            getIndex(pictures.length - 1);
        }
        else {
            getIndex(currentIndex - 1);
        }
    }

    function nextPicture(){
        if(currentIndex + 1 > pictures.length - 1){
            getIndex(0);
        }
        else {
        getIndex(currentIndex + 1);
        }
    }

  return (
    <div className='slider'>
        <img className='slider_leftArrow' src={leftArrow} alt='leftArrow' onClick={() => previousPicture()}/>
        <img className='slider_img' src={pictures[currentIndex]} alt='img'/>
        <img className='slider_rightArrow' src={rightArrow} alt='rightArrow' onClick={() => nextPicture()} />
    </div>
  )
}

export default Slider