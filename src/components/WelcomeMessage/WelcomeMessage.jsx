/* eslint-disable react/prop-types */
import React from 'react';

import './WelcomeMessage.scss'

const WelcomeMessage = (props) => {
  const { airlineSelected } = props;
  return (
    <div className='message'>
      <p>Hola</p>
      <p>Bienvenido, sabemos que quieres viajar en un <span>{airlineSelected}</span>, por favor diligencia el siguiente fomulario.</p>
    </div>
  );
};

export default WelcomeMessage;
