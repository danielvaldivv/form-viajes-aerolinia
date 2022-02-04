/* eslint-disable react/prop-types */
import React, { useRef } from 'react';

const FormUser = (props) => {
  const { airlineSelected, setVisibleModal } = props;

  const form = useRef(null);

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const user = {
      airline: airlineSelected,
      name: formData.get('name'),
      email: formData.get('email'),
      number: formData.get('number'),
      phone: formData.get('phone'),
    };
    console.log(user)

    setVisibleModal(true)
    
    setTimeout(() => {
      setVisibleModal(false)
    }, 5000);
  };

  return (
    <form ref={form}>
      <label>
        Nombre Completo:
        <input name='name' type="text" placeholder='Joe Doe'/>
      </label>
      <label>
        E-mail
        <input name='email' type="email" placeholder='E-mail'/>
      </label>
      <label>
        Celular
        <input name='phone' type="number" placeholder='+57 300 000 0000'/>
      </label>
      <label>
        Edad
        <input name='age' type="number" placeholder='25'/>
      </label>
      <button type='button' onClick={() => handleSubmit()}>
        Enviar
      </button>
    </form>
  );
};

export default FormUser;
