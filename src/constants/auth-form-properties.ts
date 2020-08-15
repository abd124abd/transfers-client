const loginFormProperties = () => {
  return {
    legend: 'Login',
    inputs: [
      {
        type: 'text',
        name: 'username',
        id: 'username',
        minLength: 3,
        maxLength: 10,
        value: '',
        placeholder: '',
      },
      {
        type: 'password',
        name: 'password',
        id: 'password',
        minLength: 8,
        maxLength: 64,
        value: '',
        placeholder: '',
      }
    ],
  }
};

const registrationFormProperties = () => {
  return {
    legend: 'Register',
    inputs: [
      {
        type: 'text',
        name: 'username',
        id: 'username',
        minLength: 3,
        maxLength: 10,
        value: '',
        placeholder: '',
      },
      {
        type: 'password',
        name: 'password',
        id: 'password',
        minLength: 8,
        maxLength: 64,
        value: '',
        placeholder: '',
      }
    ],
  }
};

type authFormPropertiesOptions = {
  [key: string]: () => any;
}

const authFormProperties: authFormPropertiesOptions = {
  'login': loginFormProperties,
  'register': registrationFormProperties,
};

export default authFormProperties;
