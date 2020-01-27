import React from 'react';
import Header from '../../Components/Header';
import {SafeAreaView, Text} from 'react-native';
import InputDefault from '../../Components/InputDefault';
import {
  LoginBodyView,
  CreateAcount,
  CreateAcountText,
  TextLogin,
} from './styles';
function Login() {
  const title = 'aqui é o titulo';
  const name = 'Nome';
  const email = 'Email';
  return (
    <SafeAreaView>
      <Header title={title} />
      <LoginBodyView>
        <TextLogin>Insira o seu nome aqui</TextLogin>
        <InputDefault placeholder={name} />
      </LoginBodyView>

      <LoginBodyView>
        <TextLogin>Insira o seu email aqui</TextLogin>
        <InputDefault placeholder={email} />
      </LoginBodyView>


      <CreateAcount>
        <CreateAcountText>Enviar</CreateAcountText>
      </CreateAcount>
    </SafeAreaView>
  );
}

export default Login;
