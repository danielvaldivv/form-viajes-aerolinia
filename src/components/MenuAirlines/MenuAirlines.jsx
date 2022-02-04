import React from 'react';

import { dataAirlines } from '../../services/dataAirlines';

import './MenuAirlines.scss'

const menuAirlines = (props) => {

  const { setAirlineSelected } = props;

  const handleAirline = (airlineClicked) => {
    setAirlineSelected(airlineClicked)
  }

  return(
    <nav>
        <h3>Seleccione su aerolinea de preferencia</h3>
      <ul>
        {
          dataAirlines.map( (item) => (
            <li key={item.id}>
              <button type='button' onClick={() => handleAirline(item.name)}>
                {item.name}
              </button>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}

export default menuAirlines;