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


function Login({navigation}) {

  const title = 'aqui é o titulo';
  const name = 'Nome'
  const email = 'Email';

  
  async function handleLogin() {
    const person = {
      name: inputNameValue,
      email: inputMailValue,
    };
   try {
         const playerResponse = await api.get('/player/1');
         const userData = playerResponse.data;
         const matchesResponse = await api.get('/matches');
         navigation.navigate('Home', {userData, matchesResponse});
       } catch (error) {
    console.tron.error(error);
  }
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
            keyboardType={'email - address'}
            textContentType={'emailAddress'}
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

        <CreateAcountOrEnter
          tap
          onPress={() => navigation.navigate('Register')}>
          <CreateAcountOrEnterText>Clique aqui</CreateAcountOrEnterText>
        </CreateAcountOrEnter>
      </Container>
    );

}

export default Login;