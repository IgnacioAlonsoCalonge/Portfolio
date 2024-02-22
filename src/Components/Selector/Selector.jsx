import React, { useState, useEffect, useRef } from 'react';
import './Selector.css';
import foto from '../../assets/Arboles.png';
import foto1 from '../../assets/Diseño_perro.png';
import foto2 from '../../assets/foto_3.png';
import foto3 from '../../assets/foto_4.png';
import foto4 from '../../assets/Gato.png';

const Selector = () => {
    const [active, setActive] = useState(0);
    const [animando, setAnimando] = useState(true);
    const images = [
        { src: foto, title: "JavaScript" },
        { src: foto1, title: "CSS3" },
        { src: foto2, title: "Photoshop" },
        { src: foto3, title: "HTML5" },
        { src: foto4, title: "React" }
    ];
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setActive(active => (active + 1) % images.length);
        }, 3000);
        return () => clearInterval(intervalRef.current);
    }, [images.length]);

    return (
        <div className='knowledge'>
            <div className='contenedor_1 flexing_column'>
                <h3>Tecnologías</h3>
                <p>Estoy especializado en UI/UX para conseguir resultados que atraigan la atención del usuario y que su experiencia sea completa y satisfactoria. Aquí algunas de las tecnologías que he aprendido.</p>
                <div className='tecno' onMouseEnter={() => setAnimando(false)} onMouseLeave={() => setAnimando(true)}>
                    {images.map((img, index) => (
                        <div key={index} className={active === index && animando ? `categoria hovering a${index + 1}` : "categoria"}>
                            <img loading='lazy' className='hhh' src={img.src} alt={`foto${index + 1}`} />
                            <div className={active === index && animando ? `categoria-hover1 s${index}` : "categoria-hover s" + index}><h4>{img.title}</h4></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Selector;