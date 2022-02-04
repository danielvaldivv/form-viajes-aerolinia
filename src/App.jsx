import React, { useState } from 'react';

import MenuAirlines from './components/MenuAirlines/MenuAirlines';
import WelcomeMessage from './components/WelcomeMessage/WelcomeMessage';
import FormUser from './components/FormUser/FormUser';
import ModalFormFinished from './components/ModalFormFinished/ModalFormFinished';

import './App.scss'

const App = () => {
  const [airlineSelected, setAirlineSelected] = useState('____');

  const [isVisibleModal, setVisibleModal] = useState(false);

  console.log(airlineSelected);

  return (
    <div className='App'>
      <div className={`${isVisibleModal=== true && 'opacityTrue'} `}>
        <MenuAirlines setAirlineSelected={setAirlineSelected} />
        <WelcomeMessage airlineSelected={airlineSelected} />
        <FormUser setVisibleModal={setVisibleModal} airlineSelected={airlineSelected} />
      </div>
      <ModalFormFinished isVisibleModal={isVisibleModal} />
    </div>
  );
}

export default App;
