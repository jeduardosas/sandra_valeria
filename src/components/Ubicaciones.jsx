import React from 'react'
import { dataXV } from '../../data'

const {religiosa_hora,
      religiosa_minutos,
      religiosa_lugar,
      religiosa_direccion,
      religiosa_direccion_col,
      religiosa_direccion_cd,
      religiosa_ubicacion,
      recepcion_hora,
      recepcion_minutos,
      recepcion_lugar,
      recepcion_direccion,
      recepcion_direccion_col,
      recepcion_direccion_cd,
      recepcion_ubicacion} = dataXV


const Ubicaciones = ({cardCeremoniaVisible,cardRecepcionVisible}) => {
  
  return (
    <>
      <div className="ubicaciones-title centrar">
          <img src="/img/icons/ubicacion.svg" alt="" />
          <h3>Ubicaciones</h3>
      </div>
      <div className="ubicaciones-cards">
        <div id='cardCeremoniaSection' className={`ubicaciones-card_card sombra ${cardCeremoniaVisible && 'animate__animated animate__fadeInLeft'}`}>
          <div>
            <h3 className='card-title'>Ceremonia Religiosa</h3>
          </div>

          <div className='card_icon'>
            <img src='/img/icons/iglesia.svg' alt="icon-church" />
          </div>

          <div>
            <p className='card-hora'>{religiosa_hora}:{religiosa_minutos} Horas</p>
          </div>

          <div className='card-section'>
            <p className='card-nombre'>{religiosa_lugar}</p>
            <p className='card-contenido'>{religiosa_direccion}</p>
            <p className='card-contenido'>{religiosa_direccion_col}</p>
            <p className='card-from'>{religiosa_direccion_cd}</p>
          </div>
          <div className='card-button'>
            <button>
              <a href={`${religiosa_ubicacion}`} target='_blank'>ver ubicación</a>
            </button>
          </div>
        </div>

        <div id='cardRecepcionSection' className={`ubicaciones-card_card sombra ${cardRecepcionVisible && 'animate__animated animate__fadeInRight'}`}>
          <div >
            <h3 className='card-title'>Recepción</h3>
          </div>

          <div className='card_icon'>
            <img src="/img/icons/corona.svg" alt="" />
          </div>

          <div>
            
            <p className='card-hora'>{recepcion_hora}:{recepcion_minutos} Horas</p>
          </div>

          <div className='card-section'>
            <p className='card-nombre'>{recepcion_lugar}</p>
            <p className='card-contenido'>{recepcion_direccion}</p>
            <p className='card-contenido'>{recepcion_direccion_col}</p>
            <p className='card-from'>{recepcion_direccion_cd}</p>
          </div>
          <div className='card-button'>
            <button>
              <a href={`${recepcion_ubicacion}`} target='_blank'>ver ubicación</a>
            </button>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Ubicaciones