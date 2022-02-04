/* eslint-disable react/prop-types */
import React from 'react';

import './ModalFormFinished.scss'

const ModalFormFinished = (props) => {
  const { visibleModal } = props;
  
  return (
  <div className={`${visibleModal && 'isVisible'} modalFormFinished`}>
    <p>Su información fue enviada exitiósamente, estaremos en contacto contigo.</p>
  </div>
  );
};

export default ModalFormFinished;
