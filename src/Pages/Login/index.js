import React from 'react';
import Header from '../../Components/Header';
import {SafeAreaView, Text} from 'react-native';
import InputDefault from '../../Components/InputDefault';
import image from '../../../assets/README.png';
import {
  ImagePng,
  LoginBodyView,
  CreateAcountOrEnter,
  CreateAcountOrEnterText,
  TextLogin,
  Container,
} from './styles';
function Login() {
  const title = 'aqui é o titulo';
  const name = 'Nome'
   const email = 'Email';
    return (
      <Container>
        {/* <Header title={title} /> */}
      <ImagePng source={image}/>
        <LoginBodyView>
          <TextLogin>Insira o seu nome aqui</TextLogin>
          <InputDefault placeholder={name} />
        
          <TextLogin>Insira o seu email aqui</TextLogin>
          <InputDefault placeholder={email} />
        </LoginBodyView>
        <CreateAcountOrEnter enter>
          <CreateAcountOrEnterText>ENTRAR</CreateAcountOrEnterText>
        </CreateAcountOrEnter>
        <CreateAcountOrEnterText>
          Ainda não tem uma conta?
        </CreateAcountOrEnterText>

        <CreateAcountOrEnter>
          <CreateAcountOrEnterText>Clique aqui</CreateAcountOrEnterText>
        </CreateAcountOrEnter>
      </Container>
    );

}

export default Login;