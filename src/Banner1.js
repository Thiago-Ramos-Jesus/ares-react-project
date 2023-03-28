import React, {useEffect, useState } from "react";

import Riven from "./img/Riven.svg";

function Banner1() {
  return (
    <div>
      {
        <banner>
          <img src={Riven} alt="Riven" />
          <div className="div-banner1">
            <h1>
            PROVE SEU <span className='spn-talento spn-red'>TALENTO</span>
            </h1>
            <p className="sentence"><Maquina text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/></p>
            <svg class="svg-button">
            <a href="">
              <g>
                <path d="M0 10 10 0 190 0 200 10 200 50 190 60 10 60 0 50 Z" />
                {/* <path d="M0 10 10 0 190 0 200 10 200 190 190 200 10 200 0 190 Z" /> */}
                <text y="35">
                  <tspan x="50">CRIAR CONTA</tspan>
                </text>
              </g>
            </a>
          </svg>
          </div>

          
          {/* <br></br>
          <br></br>
          <br></br>
          <svg class="svg-button1">
            <a href="">
              <g>
        
                <path d="M0 40 40 0 760 0 800 40 800 760 760 800 40 800 0 760 Z" />
                 <text y="35">
                  <tspan x="50">CRIAR CONTA</tspan>
                </text> 
              </g>
            </a>
          </svg> */}
        </banner>
      }
    </div>
  );
}

export function Maquina(props) {
    const [text, setText] = useState("");

    const escrever = (text, i=0)=> {
        if(i < text.length){
            setText(text.slice(0, i + 1));
            setTimeout(()=> escrever(text, i+1),100);
        }
    };

    useEffect(()=> {
        setTimeout(()=> escrever(props.text));
    }, []);

    return (
        <>
        {text}
        </>
    )
}
export default Banner1;
