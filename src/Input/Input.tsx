import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

interface Props {
  props: any;
}

const Input = (props: any) => {
  return (
    <label htmlFor={props.name}>
      {props.name}
      <input {...props} onChange={e => props.onChange(e)} />
    </label>
  );
};

export default Input;
