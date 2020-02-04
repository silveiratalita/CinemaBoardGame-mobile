import React, { Text } from 'react';
import Header from '../../Components/Header';
import {
  LabelInput,
  TextTitle,
  SaveButton,
  Container,
  TextButton,
} from './styles';
import { SafeAreaView } from 'react-native';


function GameRoom() {
  return (
    <Container>
      <Header isToShowHeaderComplete={false}/>
      <TextTitle>Informe o nome da sala</TextTitle>
      <LabelInput placeholder={'Insira o nome da sua sala aqui!'} />
      <SaveButton>
        <TextButton>CRIE SUA SALA AGORA</TextButton>
      </SaveButton>
    </Container>
  );
}
export default GameRoom;
