import React from 'react'
import './index.scss'

const ImgGaleria = ({data}) => {
  
  return (
    <div className='imgGaleria'>
        <img src={data.imgPath} alt="" />
    </div>
  )
}

export default ImgGaleria