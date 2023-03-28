import React from "react";
import Image from "./img/iconAresSVG.svg";
import ImageAd from "./img/anuncio.svg";

function Footer() {
  return (
    <footer>
      <div id="bannerAd">
        <img id="anuncio" src={ImageAd} alt="" />
      </div>
      <div id="boxPai">
        <div id="boxContatos">
          <div className="text" id="dadosAres">
            <span>(11) 3589-4043</span>
            <span id="spanEndereco">
              Rua Haddock Lobo, 595 - Cerqueira César,
              <br />
              São Paulo - SP, 01414-001
            </span>
          </div>
          <img id="logo" src={Image} alt="" />
          <div className="text" id="politicaAres">
            {/* Mudar para tag A quando houver links */}
            <div id="box">
              <div>Fale conosco</div>
              <div>Sobre nós</div>
              <div>Políticas de uso</div>
            </div>
            <span id="autorais">Direitos autorais reservados</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
