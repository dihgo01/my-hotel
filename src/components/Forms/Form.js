import React, { useState } from 'react';
import Router from 'next/router'

import FormSignup from './FormSignup';
import Finish from '../../pages/finish';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  function redirect() {
    Router.push('/finish')
  }
  return (
    <>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : redirect() }
  
    </>
  );
};

export default Form;
