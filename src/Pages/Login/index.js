import React from 'react';
import Header from '../../Components/Header';
import { SafeAreaView } from 'react-native';
import InputDefault from '../../Components/InputDefault';
import {LoginBodyView, TextLogin} from './styled';
function Login() {
  const title = 'aqui é o titulo';
  const name = 'Nome'
   const email = 'Email';
    return (
      <SafeAreaView style={{justifyContent:"space-between"}}>
        <Header title={title}  />

        <LoginBodyView >
          <TextLogin>Insira o seu nome aqui</TextLogin>
          <InputDefault placeholder={name} />
        </LoginBodyView>

        <LoginBodyView>
          <TextLogin>Insira o seu email aqui</TextLogin>
          <InputDefault placeholder={email} />
        </LoginBodyView>
      </SafeAreaView>
    );

}

export default Login;