import React from 'react';
import './Boton2.css';
import pdfFile from '../../assets/CV.pdf'

const Boton2 = () => {
  const descargarPDF = () => {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = 'CV Ignacio Alonso'; // Nombre que tendrá el archivo descargado
    link.click();
  };

  return (
    <div className='contenedorboton'>
      <button onClick={descargarPDF}>
        <span>Currículum</span>
      </button>
    </div>
  );
};

export default Boton2;