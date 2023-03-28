import React from "react";
import Tristana from "./img/iconTristana.svg";
import Periferico from "./img/iconPerifericos.svg";

function RegraDeNegocio() {
  return (
    <div id="containerRegra">
      <div id="boxTristana">
        <img id="tristana" src={Tristana} alt="" />
      </div>
      <div id="boxText">
        <div id="contTextRegra">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,
        </div>
        <div id="contPerifericos">
          <img id="periferico" src={Periferico} alt="" />
        </div>
      </div>
    </div>
  );
}

export default RegraDeNegocio;
