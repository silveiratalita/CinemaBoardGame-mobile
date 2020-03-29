import React, { useState,useCallback } from 'react';
import Header from '../../Components/Header';
import {SafeAreaView, Text, Alert} from 'react-native';
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
    
    try {
     const response = await api.get('/users', {
       params: {
         email: inputMailValue,
         username: inputNameValue,
       }
         });
      const userData = response.data;
      console.tron.log('response',response)
     console.tron.log('playerResponse',userData)
      const matchesResponse = await api.get(`matches/${userData.id}`);
      
     navigation.navigate('Home', { userData, matchesResponse });
     navigation.navigate('Home', {userData});
    } catch (error) {
      alert("Usuário não encontrado.Por favor verifique o nome de usuário e seu email")
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