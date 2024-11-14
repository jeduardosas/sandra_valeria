import { dataXV } from '../../data'
import '../styles/datos-nombres-papas.css'
import DatosNombresPadrinos from './DatosNombresPadrinos'

const { nombre_papa,nombre_mama } = dataXV
const DatosNombresPapas = () => {
  return (
    <div className='datos-nombres-papas'>
      <div className='datos-nombres-papas_title'>
        <p>En compañia de mis padres</p>
      </div>
      <div className='datos-nombres-papas_cards'>
        <div className='datos-nombres-papas_card'>
          <p>{nombre_papa}</p>
          <p>{nombre_mama}</p>
        </div>
        
      </div>
      <DatosNombresPadrinos />
      
    </div> 
  )
}

export default DatosNombresPapas