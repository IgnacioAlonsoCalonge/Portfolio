import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Socials from './Socials'
import '../Introduccion/Introduccion.css'
import Boton1 from './Boton1'
import As from '../../assets/Man_mask_7.png'


const Introduccion = () => {

  return (
<header>
    <div className="contenedor_presentacion">
    <div className='presentacion'>
        <h1>Nacho Alonso</h1>
        <h2>Soy <span>
        <TypeAnimation
                      sequence={[
                          'IT Engineer',
                          2000,
                          'Diseñador.',
                          2000,
                          'UI/UX Dev.',
                          2000,
                      ]}
                      speed={50}
                      className='type_animation'
                      wrapper='span'
                      repeat={Infinity}
                      cursor={true}
                  />      
          </span></h2>
          <p>¡Hola a todos! Soy Nacho, un desarrollador web
             altamente motivado y apasionado por la creación 
            de sitios web y aplicaciones que cumplan con los
             más altos estándares de calidad.</p>
          <Boton1 enlace='https://www.linkedin.com/in/ignacio-alonso-5845762b1/' texto_boton="contacta conmigo"/>
          <Socials/>
    </div>
    <div className='nuevo'>
        <img src={As} />
    </div>
  </div>
</header>
  )
}

export default Introduccion