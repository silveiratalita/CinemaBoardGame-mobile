import React from 'react';
import {InputView, InputText} from './styles';

type Props = {
    placeholder: String,
};
function InputDefault({placeholder}: Prop) {
  return (
    <InputView>
      <InputText placeholder={placeholder} />
    </InputView>
  );
}

export default InputDefault;