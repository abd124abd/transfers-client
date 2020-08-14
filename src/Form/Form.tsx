import React from 'react';
import {v4 as uuidv4} from 'uuid';

interface Props {
  formProperties: any;
}

// modify so takes generic form props and returns related inputs
const Form = ({formProperties}: Props) => {
    const {legend, onSubmit, inputs} = formProperties;

    // state for the inputs
    const inputsJSX = inputs.map((input: any) => {
        return (
          <label key={uuidv4()} htmlFor={input.name}>
            {input.name}
            <input {...input}/>
          </label>
        );
    });

    return (
      <form onSubmit={onSubmit}>
        <legend>{legend}</legend>
        {inputsJSX}
        <input type='submit' value='submit' />
      </form>
    )
}

export default Form;
