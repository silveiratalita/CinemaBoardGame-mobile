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
  const onInputRoomName = useCallback(value => {
    setInputNameRoomValue(value);
  });
  function handleCreateRoom() {
      navigation.navigate('Room', { userData, inputNameRoomValue });
  }
  useEffect(() => {
  }, [inputNameRoomValue]);
  return (
    <Container>
      <Header isToShowHeaderComplete={false} />
      <ContainerContent>
        <TextTitle>Informe o nome da sala</TextTitle>
        <InputDefault
          placeholder={'Insira o nome da sua sala aqui!'}
          onChangeText={onInputRoomName}
          value={inputNameRoomValue}
        />
      </ContainerContent>
      <SaveButton onPress={handleCreateRoom}>
        <TextButton>CRIE SUA SALA AGORA</TextButton>
      </SaveButton>
    </Container>
  );
}
export default CreateGameRoom;
