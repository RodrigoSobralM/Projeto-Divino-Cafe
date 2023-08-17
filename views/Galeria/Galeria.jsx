import React, { useState } from 'react'
import Header from '../../src/components/Banner/Header/Header'
import './index.scss';
import ImgGaleria from '../../src/components/imgsGaleria/ImgGaleria';

const Galeria = ({data}) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  
  return (
    <div className='fundo'>
        <Header />
        <div className='nGaleria'>
          <h1>
            GALERIA
          </h1>
          <div className='nGaleria__displayImg'>
            {data.map((imgs) => (
              <ImgGaleria key={imgs.id} imgPath={imgs.imgPath}/>
            ))}
          </div>      
        </div>
        <div className='nFotos'>
        </div>
    </div>
  )
}

export default Galeria