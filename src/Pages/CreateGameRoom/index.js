import React, { Text } from 'react';
import Header from '../../Components/Header';
import {
  LabelInput,
  TextTitle,
  SaveButton,
  Container,
  TextButton,
  ContainerContent,
} from './styles';
import InputDefault from '../../Components/InputDefault';


function GameRoom() {
  return (
    <Container>
      <Header isToShowHeaderComplete={false} />
      <ContainerContent>
        <TextTitle>Informe o nome da sala</TextTitle>
        <InputDefault placeholder={'Insira o nome da sua sala aqui!'} />
      </ContainerContent>
      <SaveButton>
        <TextButton>CRIE SUA SALA AGORA</TextButton>
      </SaveButton>
    </Container>
  );
}
export default GameRoom;
