import React from 'react'
import '../About_me/SobreMi.css'
import me from '../../assets/Neones_definitivo6.png'
import Boton2 from './Boton2'
import { useEffect } from 'react'

const SobreMi = () => {

  useEffect(() => {
    
  }, []);

  return (
    <div className='sobreMi'>
      <div className='contenedor_1 c_foto'>
        <div className="App">
          <div  className='scene'>
            <div className='shootstar'></div>
            <div className='shootstar1'></div>
            <div className='shootstar2'></div>
            <div className='luna'></div>
          </div>
          <img loading='lazy' className='foto_about_me' src={me}/>
        </div>

        <div className='descripcion'>
          <h3 className='quien_soy'>¿Quien soy?</h3>
          <p>Estudio ingeniería de tecnologías y servicios de telecomunicación en la Universidad Politécnica de
            Madrid <a href='https://www.etsit.upm.es/' target="_blank">ETSIT</a>. Me especialicé en el área de Telemática, lo que me ha permitido adquirir conocimientos y habilidades
           en el diseño e implementación.
          </p>
          <p>Descubrí en el desarrollo web una pasión que me permitía plasmar la creatividad e imaginación con los conocimientos técnicos adquiridos durante esta etapa.
          </p>
          <p>Es un  verdadero placer poder compartir contigo algunos de mis proyectos que espero que te gusten.
          </p>
          <Boton2  texto_boton="Curriculum" />
        </div>
      </div>
    </div>
  )
}



export default SobreMi