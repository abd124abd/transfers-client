import React, {useState, FormEvent} from 'react';
import {v4 as uuidv4} from 'uuid';
import Input from '../Input/Input';

interface Props {
  formProperties: any;
  formType: string;
  submitHandler: {(formType: string, data: any): undefined};
}

// modify so takes generic form props and returns related inputs
const Form = ({formProperties, formType, submitHandler}: Props) => {
    const {legend, inputs} = formProperties;

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

    const getDataToSubmit = () => {
      return Object.values(data).reduce((acc: any, input: any) => {
        acc[input.name] = input.value;
        return acc;
      }, {});
    };

    const onSubmitHandler = (e: any) => {
      e.preventDefault();
      submitHandler(formType, getDataToSubmit())
    };

    return (
      <form onSubmit={onSubmitHandler}>
        <legend>{legend}</legend>
        {inputsJSX}
        <input type='submit' value='submit' />
      </form>
    );
};

export default Form;
