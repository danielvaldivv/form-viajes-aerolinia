/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import './FormUser.scss'

const FormUser = (props) => {
  const { setVisibleModal } = props;

  const [ userInfo, setUserInfo ]  = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
  })

  const handleInputChange = (event) => {
    setUserInfo({
      ...userInfo,
      [event.target.name] : event.target.value
    });
  };

  const handleSubmit = (event) => {

    event.preventDefault()

    console.log(userInfo)

    setVisibleModal(true)

    setTimeout(() => {
      setVisibleModal(false)
    }, 5000);

    event.target.reset()
  };

  return (
    <form  onSubmit={handleSubmit} className="form">
      <div>
        Nombre Completo:
        <input name='name' onChange={handleInputChange} type="text" placeholder='Joe Doe' required/>
      </div>
      <div>
        E-mail:
        <input name='email' onChange={handleInputChange} type="email" placeholder='E-mail' required/>
      </div>
      <div>
        Celular:
        <input name='phone' onChange={handleInputChange} type="number" placeholder='300 000 0000' size="10" required/>
      </div>
      <div>
        Edad:
        <input name='age' onChange={handleInputChange} type="number" placeholder='25' min="18" max="100" required/>
      </div>
      <button type='submit'>
        Enviar
      </button>
    </form>
  );
};

export default FormUser;
