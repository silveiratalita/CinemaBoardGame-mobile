import React from 'react';
import {InputView, InputText} from './styles';

type Props = {
    placeholder: String,
};
function InputDefault({placeholder}: Prop) {
  return (

      <InputText placeholder={placeholder} />

  );
}

export default InputDefault;