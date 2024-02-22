import React, { useMemo } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Socials from './Socials';
import Boton1 from './Boton1';
import '../Introduccion/Introduccion.css';
import As from '../../assets/Man_mask_7.png';

const Introduccion = () => {
  
  const sequence = useMemo(() => [
    'IT Engineer',
    2000,
    'Diseñador.',
    2000,
    'UI/UX Dev.',
    2000,
  ], []);

  return (
    <header>
      <div className="contenedor_presentacion">
        <div className='presentacion'>
          <h1>Nacho Alonso</h1>
          <h2>
            Soy 
            <span>
              <TypeAnimation
                sequence={sequence}
                speed={50}
                className='type_animation'
                wrapper='span'
                repeat={Infinity}
                cursor={true}
              />      
            </span>
          </h2>
          <p>
            ¡Hola a todos! Soy Nacho, un desarrollador web altamente motivado y apasionado por la creación 
            de sitios web y aplicaciones que cumplan con los más altos estándares de calidad.
          </p>
          <Boton1 enlace='https://www.linkedin.com/in/ignacio-alonso-5845762b1/' texto_boton="contacta conmigo"/>
          <Socials />
        </div>
        <div className='nuevo'>
          {/* Lazy load de la imagen */}
          <img loading='lazy' src={As} alt="Nacho Alonso" />
        </div>
      </div>
    </header>
  );
};

export default Introduccion;