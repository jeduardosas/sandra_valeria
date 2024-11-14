
import { useState } from "react";
import { useLocation, Navigate} from "react-router-dom";
import { dataXV } from "../../data";
import ReactAudioPlayer from "react-audio-player";
import Modal from 'react-modal'
import CountDown from "/@/components/ContDown";
import Header from "/@/components/Header";
import Datos from "/@/components/Datos";
import Ubicaciones from "/@/components/ubicaciones";
import Confirmacion from '/@/components/Confirmacion';
import Reservacion from '/@/components/Reservacion';
import TimeLine from "../components/TimeLine";
import Slider from "../components/Slider";
import Regalos from "../components/Regalos";
import Footer from "../components/Footer";
import useScrollVisible from "/@/hooks/useScrollVisible";
import Hoteles from "../components/Hoteles";
import 'animate.css'
import '/@/styles/invitacion.css'
import '/@/styles/modal.css'

//estilos para el modal 
const customStyles = {
  content:{
    width:'80%',
    top:'50%',
    left:'50%',
    right:'auto',
    bottom:'auto',
    marginRight:'-50%',
    transform:'translate(-50%, -50%)',
    textAlign:'center',
    border:'none',
    boxShadow:'10px 10px 10px #bdbdbd',

  },
};

const {nombre} = dataXV;


const Invitacion = () => {
  const song = '/music/song1.mp3'

  //estado para manejar la reproduccion del audio
  const [play,setPlay] = useState(false);
  const [modalIsOpen, setModalIsopen] = useState(true);//estado para manejar el modal
  
  //VALIDACION DE LOS PARAMS DE LA URL
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const pases = params.get("pases") || "";

  if (pases === "") {
    return <Navigate to="/notfound" />;
  }
  if(pases<0 || pases >8){
    return <Navigate to="/notfound" />
  }
  //VARIABLES PARA MANEJAR LAS ANIMACIONES
  const confirmacionVisible = useScrollVisible('confirmacionSection')
  const datosVisible = useScrollVisible('datosSection')
  const datosFechaVisible = useScrollVisible('datosFechaSection')
  const cardCeremoniaVisible = useScrollVisible('cardCeremoniaSection')
  const cardRecepcionVisible = useScrollVisible('cardRecepcionSection')

  const handlePlay = ()=>{
    setPlay(true);
    setModalIsopen(false)
  }

  return (
    <div className="centrar">

      <div className="img-fondo">
        <img loading="lazy" className="img-fondo-1" src="/img/img-1.png" alt="iimg-fondo" />
        <img loading="lazy" className="img-fondo-2" src="/img/img-2.png" alt="iimg-fondo" />
      </div>

      {/* REPRODUCTOR */}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={()=>setModalIsopen(false)}
        style={customStyles}
        contentLabel="Confirmacion de Reproducción"
        ariaHideApp={false} //necesario para evitar adverterncias en pruebas yu desarrollo
        shouldCloseOnOverlayClick={false}
      >
        <h5 className="modal-tittle-1">MIS XV AÑOS</h5>
        <h2 className="modal-tittle-2">{nombre}</h2>
        <p className="modal-content">Para una mejor experiencia, por favor acepta la reproduccion automatica</p>   
        <button className="modal-button" onClick={handlePlay}>Aceptar</button>
      </Modal>

      {
        play && (
         <>
            <div className="reproductor">
            <ReactAudioPlayer 
              className="reproductor" 
              src={song} 
              autoPlay={true}
              preload="auto"
              controls/>
            </div> 
      
      
            <Header />

            <div id="datosSection" className="datos">
            <Datos datosVisible={datosVisible} datosFechaVisible={datosFechaVisible} />
            </div>
      
            <CountDown />
      

            <div className="ubicaciones">
            <Ubicaciones 
              cardCeremoniaVisible={cardCeremoniaVisible} 
              cardRecepcionVisible={cardRecepcionVisible}/>
            </div>
            {/* <div className="linea"></div> */}
      

      
      
            <TimeLine />

      

            {/* <div className="protocolo">
              
              <div className='protocolo-img' >
                <img src="/img/protocolo.png" alt="" />
              </div>
            </div> */}
              <Regalos />
            
              {/* <CodigoVestimenta />  */}   

            <div className="slider">
              <Slider />
            </div>

            <div className="lugares">
              <Reservacion pases={pases} />
            </div>

            <div  id='confirmacionSection' className={`confirmar ${confirmacionVisible && 'animate__animated animate__fadeInLeft'}`}>
              <Confirmacion/>
            </div>

            
            <Hoteles />
            


            <div>
              <Footer />
            </div>
          </>
        )
      }

        
      
    </div>
    
    
  );
};

export default Invitacion;
