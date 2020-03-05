import React from 'react';
import {InputView, InputText} from './styles';


function InputDefault({...props}) {
  return (
    <InputText {...props}/>
  );
}


export default InputDefault;