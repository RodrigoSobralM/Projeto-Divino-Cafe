import React, { useState } from 'react'
import Header from '../../src/components/Banner/Header/Header'
import { Link } from "react-router-dom";
import './index.scss';
import { key } from 'localforage';
import ImgGaleria from '../../src/components/imgsGaleria/ImgGaleria';

import imagem1 from '../../public/galeria_1.jpg';
import imagem2 from '../../public/galeria_2.jpg';
import imagem3 from '../../public/galeria_3.jpg';
import imagem4 from '../../public/galeria_4.jpg';
import imagem5 from '../../public/galeria_5.jpg';
import imagem6 from '../../public/galeria_6.jpg';
import imagem7 from '../../public/galeria_7.jpg';
import imagem8 from '../../public/galeria_8.jpg';
import imagem9 from '../../public/galeria_9.jpg';
import imagem10 from '../../public/galeria_10.jpg';
import imagem11 from '../../public/galeria_11.jpg';
import imagem12 from '../../public/galeria_12.jpg';
import imagem13 from '../../public/galeria_13.jpg';
import imagem14 from '../../public/galeria_14.jpg';
import imagem15 from '../../public/galeria_15.jpg';
import imagem16 from '../../public/galeria_16.jpg';
import imagem17 from '../../public/galeria_17.jpg';
import imagem18 from '../../public/galeria_18.jpg';
import imagem19 from '../../public/galeria_19.jpg';
import imagem20 from '../../public/galeria_20.jpg';
import imagem21 from '../../public/galeria_21.jpg';
import imagem22 from '../../public/galeria_22.jpg';
import imagem23 from '../../public/galeria_23.jpg';


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