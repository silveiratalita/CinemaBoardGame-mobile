import React from 'react';
import Header from '../../Components/Header';
import {SafeAreaView, Text} from 'react-native';
import InputDefault from '../../Components/InputDefault';
import image from '../../../assets/README.png';
import {
  ImagePng,
  LoginBodyView,
  CreateAcount,
  CreateAcountText,
  TextLogin,
  Container,
} from './styles';

function Register() {
  const title = 'aqui é o titulo';
  const name = 'Nome';
  const email = 'Email';
  return (
    <Container>
      <ImagePng source={image} />
      <LoginBodyView>
        <TextLogin>Insira o seu nome aqui</TextLogin>
        <InputDefault placeholder={name} />

        <TextLogin>Insira o seu email aqui</TextLogin>
        <InputDefault placeholder={email} />
      </LoginBodyView>

      <CreateAcount>
        <CreateAcountText>Salvar meu cadastro!</CreateAcountText>
      </CreateAcount>
    </Container>
  );
}

export default Register;
