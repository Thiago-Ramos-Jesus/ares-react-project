import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./img/logo.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      {
        <div className="container">
          <div className="box">
          <img className="logo" src={logo} alt="Logo" />
          </div>
          <div className="box">
          <nav className="nav-desktop">
            <ul>
              <li>
                <a href="">Notícias</a>
              </li>
              <li>
                <a to="/about">Ranking</a>
              </li>
              <li>
                <a to="/contact">Sobre Nós</a>
              </li>
              <li>
                <a to="/contact">Fale Conosco</a>
              </li>
              </ul>
              </nav>
              </div>
              <div className="box">
              <nav className="nav-desktop">
              <ul>
              <li>
                <a to="/contact">Entrar</a>
              </li>
              <li>
                <a to="/contact">Cadastrar</a>
              </li>
            </ul>
          </nav>
          </div>

          {/* <nav className={isOpen ? "nav show-nav" : "nav"}>
            <ul>
              <li>
                <a href="">Notícias</a>
              </li>
              <li>
                <a to="/about">Ranking</a>
              </li>
              <li>
                <a to="/contact">Sobre Nós</a>
              </li>
              <li>
                <a to="/contact">Fale Conosco</a>
              </li>
              <li>
                <a to="/contact">Entrar</a>
              </li>
              <li>
                <a to="/contact">Cadastrar</a>
              </li>
            </ul>
          </nav> */}
          {/* <button className="toggle-nav" onClick={toggleNav}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button> */}
        </div>
      }
    </header>

    //   <footer>
    //     {
    //  <div className="container">
    //          <img src={logo} alt="Logo" />
    //         <div id="contato">
    //          teste
    //         </div>
    //       </div>
    //     }
    //   </footer>
  );
}

export default Header;
