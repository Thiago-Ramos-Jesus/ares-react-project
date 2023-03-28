import React from "react";
import Espada from "./img/espada.svg";
import Varinha from "./img/varinha.svg";

function ModosDeJogo() {
  return (
    <div id="containerModos">
      <div id="borderModos">
        <div id="containerTexto">
          <p id="textModos">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </p>
          <svg className="svg-button">
            <a>
              <g>
                <path d="M0 10 10 0 190 0 200 10 200 50 190 60 10 60 0 50 Z" />
                <text y="35">
                  <tspan x="70">JOGAR</tspan>
                </text>
              </g>
            </a>
          </svg>
        </div>
        <div id="boxModos">
          <div className="containerIcons">
            <div id="boxIcon"></div>
            <img src={Espada} className="icon" alt="" />
          </div>
          <div className="containerIcons">
            <div id="boxIcon"></div>
            <img src={Varinha} className="icon" id="varinhaIcon" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModosDeJogo;
