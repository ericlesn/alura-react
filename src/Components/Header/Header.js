import React from 'react'
import LinkWrapper from '../../utils/LinkWrapper'

const Header =() =>{
    return(
        <nav>
        <div className="nav-wrapper indigo lighten-2">
          <LinkWrapper to="/" activeStyle={{}} className="brand-logo">Casa do Código</LinkWrapper>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><LinkWrapper to="/autores">Autores</LinkWrapper></li>
            <li><LinkWrapper to="/livros">Livros</LinkWrapper></li>
            <li><LinkWrapper to="/sobre">Sobre</LinkWrapper></li>
          </ul>
        </div>
      </nav>
    )
}

//trocando os a href pela tag LinkWrapper, para obter um comportamento de SPA, sem recarregamento de página

export default Header;