/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';

const WelcomeMessage = (props) => {
  const { airlineSelected } = props;
  return (
    <Fragment>
      <p>Hola</p>
      <p>Bienvenido, sabemos que quieres viajar en un <span>{airlineSelected}</span>, por favor diligencia el siguiente fomulario.</p>
    </Fragment>
  );
};

export default WelcomeMessage;
