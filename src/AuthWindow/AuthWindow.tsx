import React, { useState } from 'react';
import Form from '../Form/Form';
import authFormProperties from '../constants/auth-form-properties';

interface Props {
  submitHandler: {(formType: string, userData: any): undefined};
}

const AuthWindow = ({submitHandler}: Props) => {

  const [authFormType, updateAuthFormType] = useState('login');

  return (
    <div className="auth-window">
      <Form
        formProperties={authFormProperties[authFormType]()}
        formType={authFormType}
        submitHandler={submitHandler}
      />
      <section className='modify-auth-form-type'>
        <button onClick={() => updateAuthFormType('login')}>login</button>
        <button onClick={() => updateAuthFormType('register')}>register</button>
      </section>
    </div>
  );
}

export default AuthWindow;
