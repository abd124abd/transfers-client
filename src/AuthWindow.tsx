import React, { useState } from 'react';
import Form from './Form';
import authFormProperties from './constants/auth-form-properties';

interface Props {
  submitHandler: {(value: any): void}
}

const AuthWindow = ({submitHandler}: Props) => {

  const [authFormType, updateAuthFormType] = useState('login');

  return (
    <div className="auth-window">
      <Form formProperties={authFormProperties[authFormType](submitHandler)} />
      <section className='modify-auth-form-type'>
        <button onClick={() => updateAuthFormType('login')}>login</button>
        <button onClick={() => updateAuthFormType('register')}>register</button>
      </section>
    </div>
  );
}

export default AuthWindow;
