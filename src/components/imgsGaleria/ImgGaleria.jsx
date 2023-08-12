import React from 'react'
import './index.scss'

const ImgGaleria = ({imgPath}) => {
  
  return (
    <div className='imgGaleria'>
        <img src={imgPath} alt="" />
    </div>
  )
}

export default ImgGaleria