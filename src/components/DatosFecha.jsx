import React from 'react'
import { dataXV } from '../../data'

const { fecha_dia, fecha_mes, fecha_year } = dataXV

const DatosFecha = ({datosFechaVisible}) => {
  return (
    <div id='datosFechaSection' className={`datos-fecha ${datosFechaVisible && 'animate__animated animate__slideInUp'}`}>
      <p className='datos-fecha-title'>Celebremos Juntos el día</p>
      <div className="datos-fecha_div">
        <p>{fecha_dia}</p>
        <p>{fecha_mes}</p> 
        <p>{fecha_year}</p>
      </div>
    </div>
  )
}

export default DatosFecha