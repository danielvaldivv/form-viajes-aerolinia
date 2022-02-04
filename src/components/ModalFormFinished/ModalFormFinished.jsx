/* eslint-disable react/prop-types */
import React from 'react';

import './ModalFormFinished.scss'

const ModalFormFinished = (props) => {
  const { isVisibleModal } = props;
  
  return (
  <div className={`${isVisibleModal === true && 'isVisible'} modalFormFinished`}>
    <p>Su información fue enviada exitiósamente, estaremos en contacto contigo.</p>
  </div>
  );
};

export default ModalFormFinished;
