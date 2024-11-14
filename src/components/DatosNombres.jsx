import React from 'react'
import { dataXV } from '../../data'

const {nombre} = dataXV;

const DatosNombres = ({datosVisible}) => {
  return (
    <>
      <p className={`datos-nombre-nb ${datosVisible && 'animate__animated animate__zoomIn'}`}>Mis XV años</p>
      <p className={`datos-nombre-b ${datosVisible && 'animate__animated animate__zoomIn'}`}>{nombre}</p>
      
    </>
  )
}

export default DatosNombres