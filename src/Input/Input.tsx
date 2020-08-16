import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

interface Props {
  props: any;
}

interface ValidationProperties {
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

const Input = (props: any) => {
  const validationProperties: ValidationProperties = {};

  if (props.hasOwnProperty('minLength')) {
    validationProperties.minLength = props.minLength;
  };

  if (props.hasOwnProperty('maxLength')) {
    validationProperties.maxLength = props.maxLength;
  };

  return (
    <label htmlFor={props.name}>
      {props.name}
      <input
        {...props}
        {...validationProperties}
        onChange={e => props.onChange(e)}
        required={true}
      />
    </label>
  );
};

export default Input;
