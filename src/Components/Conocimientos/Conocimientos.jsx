import React, { useState } from 'react'
import './Conocimientos.css'
import foto1 from '../../assets/image_1.png'
import foto2 from '../../assets/image_2.png'
import foto5 from '../../assets/foto_5.png'
import foto6 from '../../assets/election.png'
import { useEffect } from 'react'
import { FaMobileAlt } from "react-icons/fa";
import { FaTabletAlt } from "react-icons/fa";
import { MdLaptopMac } from "react-icons/md";
import { FaTshirt } from "react-icons/fa";




const Conocimientos = () => {

  const [grados, setGrados] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGrados(grados => grados + 90); // Incrementa los grados en 20 cada segundo
    }, 10000);

    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
  }, []);



  return (
    <div id="contacto">
      <div className='contenedor_1 proyectos_1'>
        <h3>Proyectos</h3>
        <div className='flexing'>
          <div className='box' style={{ transform: `perspective(1000px) rotateY(${grados}deg)`}}>
            <div className='card' style={{"--i":1}}>
            <a href='https://ignacioalonsocalonge.github.io/TFG_Custom/' target='_blank'>
              <div className='imgBx'><img loading='lazy' src={foto1} alt=''></img></div>
              </a>
              <h4>Desink</h4>
            </div>
            <div className='card' style={{"--i":2}}>
            <a href='https://ignacioalonsocalonge.github.io/TFG_Custom/' target='_blank'>
              <div className='imgBx'><img loading='lazy' src={foto2} alt=''></img></div>
            </a>
              <h4>Desink</h4>

            </div>
            <div className='card' style={{"--i":3}}>
              <a href='https://ignacioalonsocalonge.github.io/TFG_Custom/' target='_blank'>
              <div className='imgBx'><img loading='lazy' src={foto5} alt=''></img></div>
              </a>
              <h4>Desink</h4>
            </div>

            <div className='card' style={{"--i":4}} alt=''>
            <a href='https://ignacioalonsocalonge.github.io/TFG_Custom/' target='_blank'>
              <div className='imgBx'><img loading='lazy' src={foto6}></img></div>           
            </a>
            <h4>Desink</h4>

            </div>
          </div>
          <div className='proy_1'>
          <div className='propiedades_1'>
            <article className='prop_1'>
              <div className='logos_1'>
               <FaMobileAlt className='responsive_d' />
               <FaTabletAlt className='responsive_d' />
               <MdLaptopMac className='responsive_d1'/>
               </div>
               <h5>Responsive Design</h5>
               <small>Plataforma desarrollada para disfrutar en todo tipo de dispositivos</small>
            </article>
            <article className='prop_1'>
               <FaTshirt className='responsive_d' />
               <h5>Logros</h5>
               <small>El tiempo de desarrollo ha sido aproximadamente de 6 meses y medio </small>
            </article>
            <article className='prop_1'>
               <FaMobileAlt className='responsive_d' />
               <h5>Competencias</h5>
               <small>Desarrollo Frontend, lógica de cliente, diseño y creatividades</small>
            </article>
          </div>
          <div className='proy_2'>
          <p><a target='_blank' href='https://ignacioalonsocalonge.github.io/TFG_Custom/'>Desink</a> es una plataforma desarrollada para customizar tu propia ropa a través de imágenes generadas por inteligencia artificial. Podrás cambiar el color de tus prendas
            , elegir el tipo de prenda que quieres o incluso ¡generar tus propios diseños!
          </p></div>
        </div>
        </div>
      </div>
      <div className='wwww'></div>

    </div>
  )
}

export default Conocimientos