const loginFormProperties = (submitHandler: {(value: any): void}) => {
  return {
    legend: 'Login',
    onSubmit: submitHandler,
    inputs: [
      {
        type: 'text',
        name: 'username',
        id: 'username',
        min: 3,
        max: 10,
        value: '',
        placeholder: '',
      },
      {
        type: 'password',
        name: 'password',
        id: 'password',
        min: 8,
        max: 64,
        value: '',
        placeholder: '',
      }
    ]
  }
};

const registrationFormProperties = (submitHandler: {(value: any): void}) => {
  return {
    legend: 'Register',
    onSubmit: submitHandler,
    inputs: [
      {
        type: 'text',
        name: 'username',
        id: 'username',
        min: 3,
        max: 10,
        value: '',
        placeholder: '',
      },
      {
        type: 'password',
        name: 'password',
        id: 'password',
        min: 8,
        max: 64,
        value: '',
        placeholder: '',
      }
    ]
  }
};

type authFormPropertiesOptions = {
  [key: string]: (submitHandler: {(value: any): void}) => any;
}

const authFormProperties: authFormPropertiesOptions = {
  'login': loginFormProperties,
  'register': registrationFormProperties,
};

export default authFormProperties;
