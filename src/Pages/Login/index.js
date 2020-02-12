import React, { useState,useCallback } from 'react';
import Header from '../../Components/Header';
import {SafeAreaView, Text} from 'react-native';
import InputDefault from '../../Components/InputDefault';
import image from '../../../assets/CINEMA.jpg';
import api from '../../services/api';
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

  function handleLogin() {
    const person = {
      name: inputNameValue,
      email: inputMailValue,
    };
    console.tron.log('oi');
  }
  const [inputNameValue, setInputNameValue] = useState('');
    const [inputMailValue, setInputMailValue] = useState('');

const onInputChangeName = useCallback(value => {
  setInputNameValue(value);
});
  const onInputChangeMail = useCallback(value => {
    setInputMailValue(value);
  });

    return (
      <Container>
        <Header title={title} isToShowHeaderComplete={false} />
        <LoginBodyView>
          <InputDefault
            placeholder={name}
            onChangeText={onInputChangeName}
            value={inputNameValue}
          />

          <InputDefault
            placeholder={email}
            onChangeText={onInputChangeMail}
            value={inputMailValue}
          />
        </LoginBodyView>
        <CreateAcountOrEnter enter>
          <CreateAcountOrEnterText onPress={handleLogin}>
            ENTRAR
          </CreateAcountOrEnterText>
        </CreateAcountOrEnter>
        <CreateAcountOrEnterText>
          Ainda não tem uma conta?
        </CreateAcountOrEnterText>

        <CreateAcountOrEnter tap>
          <CreateAcountOrEnterText>Clique aqui</CreateAcountOrEnterText>
        </CreateAcountOrEnter>
      </Container>
    );

}

export default Login;