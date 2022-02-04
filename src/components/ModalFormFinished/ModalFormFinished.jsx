/* eslint-disable react/prop-types */
import React from 'react';

const ModalFormFinished = (props) => {
  const { isVisibleModal } = props;
  
  return (
  <div className={`${isVisibleModal === true && 'isVisible'} modalFormFinished`}>
    <p>Su información fue enviada exitiósamente</p>
  </div>
  );
};

export default ModalFormFinished;
