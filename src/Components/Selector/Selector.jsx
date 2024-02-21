import React from 'react'
import './Selector.css'
import foto from '../../assets/Arboles.png'
import foto1 from '../../assets/Diseño_perro.png'
import foto2 from '../../assets/foto_3.png'
import foto3 from '../../assets/foto_4.png'
import foto4 from '../../assets/Gato.png'
import { useState, useEffect } from 'react'
import './Selector.css'

const Selector = () => {

    const [active, setActive] = useState(0);
    const [animando, setAnimando] = useState(true);
  
    const images =  [
      foto,
      foto1,
      foto2,
      foto3,
      foto4,
    ];
  
    useEffect(() =>{
      const intervalId = setInterval(() =>
        {
          setActive(active => (active +1)%images.length)
        },3000);
        return () => clearInterval(intervalId);
    } , [images.length]);


  return (
    <section id='knowledge'>
        <div className='contenedor_1 flexing_column'>
            <h3>Tecnologías</h3>
            <p>Estoy especializado UI/UX para conseguir resultados que atraigan la atención del usuario y que su experiencia de usuario sea completa y satisfactoria. Aquí algunas de las Tecnologías
              que he ido aprendiendo durante este camino para conseguir un desarrollo web que cumpla con esas características.
            </p>
            <div className='tecno' onMouseEnter={()=> setAnimando(false)}
                                   onMouseLeave={()=> setAnimando(true)}>
              <div className={active === 0 && animando ? "categoria hovering a1": "categoria"}>
                <img loading='lazy' className='hhh' src={foto} alt='foto1'/>
                <div className={active === 0 && animando ? "categoria-hover1 s3" : "categoria-hover s3"}><h4>Javascript</h4></div>
              </div>
              <div className={active === 1 && animando ? "categoria hovering a2": "categoria"}>
                <img loading='lazy' src={foto1} alt='foto1'/>
                <div className={active === 1 && animando ? "categoria-hover1 s0" : "categoria-hover s0"}><h4>CSS3</h4></div>
              </div>
              <div className={active === 2 && animando ? "categoria hovering a3": "categoria"}>
                    <img loading='lazy' src={foto3} alt='foto1'/>
                    <div class={active === 2 && animando ? "categoria-hover1 s1" : "categoria-hover s1"}><h4>HTML5</h4></div>
              </div>

              <div className={active === 3 && animando ? "categoria hovering a4": "categoria "}>
                    <img loading='lazy' src={foto4} alt='foto1'/>
                    <div class={active === 3 && animando ? "categoria-hover1 s2" : "categoria-hover s2"}><h4>React</h4></div>
              </div>

              <div className={active === 4 && animando ? "categoria hovering a5": "categoria "}>
                 <img loading='lazy' src={foto2} alt='foto1'/>
                 <div class={active === 4 && animando ? "categoria-hover1 s5" : "categoria-hover s5"}><h4>Photoshop</h4></div>
              </div>
              
            </div>
        </div>
    </section>
  )
}

export default Selector