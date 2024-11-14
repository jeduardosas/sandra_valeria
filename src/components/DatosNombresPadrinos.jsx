import { dataXV } from '../../data'
import '../styles/datos-nombres-papas.css'

const {nombre_madrina, nombre_padrino} = dataXV
const DatosNombresPadrinos = () => {
  return (
    <div className='datos-nombres-papas'>
      <div className='datos-nombres-papas_title'>
        <p>Y de mis padrinos</p>
      </div>
      <div className='datos-nombres-papas_cards'>
        <div className='datos-nombres-papas_card'>
          <p>{nombre_padrino}</p>
          <p>{nombre_madrina}</p>
        </div>
      </div>
    </div> 
  )
}

export default DatosNombresPadrinos