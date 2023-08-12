import React, { useState } from 'react'
import Header from '../../src/components/Banner/Header/Header'
import { Link } from "react-router-dom";
import './index.scss';
import { key } from 'localforage';
import ImgGaleria from '../../src/components/imgsGaleria/ImgGaleria';

const Galeria = ({data}) => {
  console.log(data)
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
              <ImgGaleria key={imgs.id} data={imgs}/>
            ))}
          </div>      
        </div>
        <div className='nFotos'>
        </div>
    </div>
  )
}

export default Galeria