import React, { useState } from 'react';
import Header from '../../Components/Header';
import {SafeAreaView, Text} from 'react-native';
import InputDefault from '../../Components/InputDefault';
import image from '../../../assets/CINEMA.jpg';
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
        <Header title={title} isToShowHeaderComplete={false} />
        <LoginBodyView>
          
          <InputDefault placeholder={name} />


          <InputDefault placeholder={email} />
        </LoginBodyView>
        <CreateAcountOrEnter enter>
          <CreateAcountOrEnterText>ENTRAR</CreateAcountOrEnterText>
        </CreateAcountOrEnter>
        <CreateAcountOrEnterText>
          Ainda não tem uma conta?
        </CreateAcountOrEnterText>

        <CreateAcountOrEnter tap>
          <CreateAcountOrEnterText >Clique aqui</CreateAcountOrEnterText>
        </CreateAcountOrEnter>
      </Container>
    );

}

export default Login;