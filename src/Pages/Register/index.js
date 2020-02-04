import React from 'react';
import Header from '../../Components/Header';
import {SafeAreaView, Text} from 'react-native';
import InputDefault from '../../Components/InputDefault';
// import image from '../../../assets/README.png';

 

import {
  ImagePng,
  LoginBodyView,
  CreateAcount,
  CreateAcountText,
  TextLogin,
  UserIcon,
  Container,
} from './styles';

function Register() {
  const title = 'aqui é o titulo';
  const name = 'Nome';
  const email = 'Email';
  return (
    <Container>
      <Header isToShowHeaderComplete={false}/>
      <LoginBodyView>
       
        <InputDefault placeholder={name} />


        <InputDefault placeholder={email} />
      </LoginBodyView>

      <CreateAcount>
        <CreateAcountText>Registrar</CreateAcountText>
      </CreateAcount>
    </Container>
  );
}

export default Register;
