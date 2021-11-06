import React from 'react';

import { Labels } from '../styles/checkout';

function checkout() {
  return (
    <div>
      <p>Nome Completo</p>
      <Labels>
          <input type='text' />
      </Labels>
    </div>
  );
}

export default checkout;