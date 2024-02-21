import React from 'react'
import './Boton1.css'

const Boton1 = (props) => {
  return (
    <div className='contenedor'>
        <a href={props.enlace}><span>{props.texto_boton}</span></a>        
    </div>
  )
}

export default Boton1