import React, { useState } from 'react';

import MenuAirlines from './components/MenuAirlines/MenuAirlines';
import WelcomeMessage from './components/WelcomeMessage/WelcomeMessage';
import FormUser from './components/FormUser/FormUser';
import ModalFormFinished from './components/ModalFormFinished/ModalFormFinished';

import './App.scss'

const App = () => {
  const [airlineSelected, setAirlineSelected] = useState(null);

  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <div className='App'>
      <div className={`${visibleModal && 'opacityTrue'} `}>
        <MenuAirlines setAirlineSelected={setAirlineSelected} />
        <WelcomeMessage airlineSelected={airlineSelected} />
        <FormUser setVisibleModal={setVisibleModal} airlineSelected={airlineSelected} />
      </div>
      <ModalFormFinished visibleModal={visibleModal} />
    </div>
  );
}

export default App;
