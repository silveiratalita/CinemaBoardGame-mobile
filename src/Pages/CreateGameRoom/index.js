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


function CreateGameRoom({ navigation, route }) {

  const { userData } = route.params;
  const [inputNameRoomValue, setInputNameRoomValue] = useState('');
  const [inputNumberOfRounds, setInputNumberOfRounds] = useState('');

  // const onInputRoomName = useCallback(value => {
  //   setInputNameRoomValue(value);
  //   console.tron.log('---',inputNameRoomValue);
  // });

  function handleCreateRoom() {
      navigation.navigate('Room', { userData, inputNameRoomValue, inputNumberOfRounds });
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
