import React, {useState, useCallback, useEffect} from 'react';
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
import api from '../../services/api';


function CreateGameRoom({ navigation, route }) {

  const { userData } = route.params;
  const [inputNameRoomValue, setInputNameRoomValue] = useState('');
  const [inputNumberOfRounds, setInputNumberOfRounds] = useState('');

  // const onInputRoomName = useCallback(value => {
  //   setInputNameRoomValue(value);
  //   console.tron.log('---',inputNameRoomValue);
  // });

  async function handleCreateRoom() {
    try {
      const response = await api.post('/matches', {
       
          userEmail: userData.email,
          roomName: inputNameRoomValue,
          rounds: inputNumberOfRounds,
      
      });
      console.tron.log('response', response);
      navigation.navigate('Room', {
        userData,
        inputNameRoomValue,
        inputNumberOfRounds,
      });
    } catch (err) {
      
    }
    
  }

  return (
    <Container>
      <Header isToShowHeaderComplete={false} />
      <ContainerContent>
        <TextTitle>Informe o nome da sala</TextTitle>
        <InputDefault
          placeholder={'Insira o nome da sua sala aqui!'}
          onChangeText={text => setInputNameRoomValue(text)}
          value={inputNameRoomValue}
        />
        <TextTitle>Informe a quantidade de rodadas que você quer jogar</TextTitle>
        <InputDefault
          placeholder={'Insira o numero de rodadas aqui!'}
          onChangeText={text => setInputNumberOfRounds(text)}
          value={inputNumberOfRounds}
        />
      </ContainerContent>
      <SaveButton onPress={handleCreateRoom}>
        <TextButton>CRIE SUA SALA AGORA</TextButton>
      </SaveButton>
    </Container>
  );
}
export default CreateGameRoom;
