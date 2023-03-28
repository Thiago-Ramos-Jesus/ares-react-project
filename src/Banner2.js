import React, { useEffect, useState } from "react";

function Banner2() {
  return (
    <div>
      {
        <banner>
          <div className="div-banner1">
            
            <p className="sentence">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              vitae sem odio. Nam luctus convallis elit. Suspendisse euismod
              aliquam posuere. Cras hendrerit augue vitae arcu euismod, sit amet
              facilisis est mollis.
            </p>
          </div>
          <svg class="svg-button1">
            <g>
              <path d="M0 40 40 0 260 0 300 40 300 360 260 400 40 400 0 360 Z" />
              <foreignObject width="290" height="390">
                <h2>PARTIDAS <span className='spn-red'>       OFICIAIS</span></h2>
                <div className="ul-card">
                <ul>
                  <li>CBLOL</li>
                  <li>LCK</li>
                  <li>LCS</li>
                  <li>LPL</li>
                  <li>LEC</li>
                </ul>
                </div>
              </foreignObject>
            </g>
          </svg>
        </banner>
      }
    </div>
  );
}
export default Banner2;
