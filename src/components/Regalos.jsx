import React from 'react'
import { dataXV } from '../../data'
import useScrollVisible from '../hooks/useScrollVisible'
import '../styles/regalos.css'

const { regalos_frase } = dataXV
const Regalos = () => {
  const sobreContentVisible = useScrollVisible('sobreContent')
  const barraContentVisible = useScrollVisible('barraContent')
  return (
    <div className='regalos'>
      <h2 className='regalos-title'>¿No sabes qué Regalarme?</h2>
      <div className="regalos-cards">
        <div id='barraContent' className={`regalos-card sombra ${barraContentVisible && 'animate__animated animate__zoomIn'}`}>
          <div style={{marginBottom:'20px'}}  className='regalos-card-content regalo-card-sobre'>
              <p>{regalos_frase}</p>
          </div>
          <h3 className='regalos-card-title'>Muchas Gracias</h3>
          <div className='regalos-img'>
            <img src="/img/icons/sobre.svg" alt="" />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Regalos