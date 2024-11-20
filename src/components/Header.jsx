import { dataXV } from "../../data"

const {frase} = dataXV

const Header = () => {
  
  return (  

    
    <>
      <header className="header centrar">
          <div className="header-image">
            <img loading="lazy"  src='/img/header.webp' alt="img_kamila" />
          </div>
      </header>
        <div className="frase">
          <p className="frase-text">{frase}</p>
        </div>
    </>
  )
}

export default Header