import React, {Text} from 'react';
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
        <TextTitle>Informe o nome da sala</TextTitle>
        <LabelInput placeholder={'nome da sala'} />
        <SaveButton>
          <TextButton>CRIE SUA SALA AGORA</TextButton>
        </SaveButton>
      </Container>

  );
}
export default GameRoom;
