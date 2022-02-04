import React from 'react';

import { dataAirlines } from '../../services/dataAirlines';

const menuAirlines = (props) => {

  const { setAirlineSelected } = props;

  const handleAirline = (airlineClicked) => {
    setAirlineSelected(airlineClicked)
  }

  return(
    <nav>
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