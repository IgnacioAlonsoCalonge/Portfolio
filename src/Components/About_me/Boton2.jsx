import React from 'react'
import './Boton2.css'

const Boton2 = (props) => {
  return (
    <div className='contenedorboton'>
        <a href='#'><span>{props.texto_boton}</span></a>        
    </div>
  )
}

export default Boton2