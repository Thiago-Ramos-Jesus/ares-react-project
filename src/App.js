import './App.css';
import React from 'react';
import Header from './Header';
import Banner1 from './Banner1';
import Banner2 from './Banner2';
import Carrossel from './Carrossel';
import Footer from './Footer';
import FaqAres from './FaqAres';
import ModosDeJogo from './ModosJogo';
import InfoSeguranca from './InfoSeguranca';
import RegraDeNegocio from './RegraDeNegocio';

function App() {
  return (
    <div id="divPaiIndex">
      <Header />
      <Banner1 />
      <Banner2 />
      <Carrossel />
      <RegraDeNegocio/>
      <InfoSeguranca/>
      <ModosDeJogo/>
      <FaqAres/>
      <Footer />
    </div>
          
  );
}

export default App;
