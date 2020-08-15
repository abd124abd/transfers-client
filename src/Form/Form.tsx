import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import Input from '../Input/Input';

interface Props {
  formProperties: any;
}

// modify so takes generic form props and returns related inputs
const Form = ({formProperties}: Props) => {
    const {legend, onSubmit, inputs} = formProperties;

    const inputData = inputs.reduce((acc: any, input: any) => {
      const { id, name, value } = input;
      acc[id] = input;
      return acc;
    }, {});

    const [data, setInputData] = useState(inputData);

    const handleChangeInput = (id: number) => (e: any) => {
      const dataCopy = {...data};
      dataCopy[id]['value'] = e.target['value'];
      setInputData(dataCopy);
    };

    // state for the inputs
    const inputsJSX = Object.values(data).map((input: any) => {
        return (
          <Input
            key={input.id}
            {...input}
            onChange={handleChangeInput(input.id)}
          />
        );
    });

    return (
      <form onSubmit={onSubmit}>
        <legend>{legend}</legend>
        {inputsJSX}
        <input type='submit' value='submit' />
      </form>
    );
};

export default Form;
