import React from 'react';
import { SafeAreaView, Text, FlatList } from 'react-native';
import image from '../../../assets/icons/problem.png';
import {
  Container,
  PlayerList,
  RoomName,
  RoomLink,
  ShareTouchable,
  PlayerListText,
  PlayersInside,
  ShareImage,
  LeftSide,
  RightSide,
  TopContainer,
  ImageDangerView,
  EstimatedTimeAndNumberOfRounds,
  EstimatedTimeAndNumberOfRoundsText,
  ViewToStyle,
  ImageDanger,
  StartGameButton,
  StartGameButtonText,
  ItemViewSeparator,
} from './styles';
import shareImg from '../../../assets/icons/share.png'
import Header from '../../Components/Header';

function Room({ navigation, route }) {
  const { userData, inputNameRoomValue, inputNumberOfRounds } = route.params;
    const data = [
      {a: 1},
      {a: 1},
      {a: 1},
      {a: 1},
      {a: 1},
      {a: 1},
      {a: 1},
      {a: 1},
      {a: 1},
      {a: 1},
      {a: 1},
    ];
  function renderItemSeparator() {
    return (
      <ItemViewSeparator/>
    );
  }
    function renderItens({item}){
        return (
                <PlayerListText>Talita acabou de entrar na sala</PlayerListText>
        );
    }
    return (
      <Container>
        <Header />
        <TopContainer>
          <LeftSide>
            <RoomName>nome da sala :{inputNameRoomValue}</RoomName>
            <RoomLink>Link da sala</RoomLink>
          </LeftSide>
          <RightSide>
            <ShareTouchable>
              <ShareImage source={shareImg} />
            </ShareTouchable>
          </RightSide>
        </TopContainer>
        <EstimatedTimeAndNumberOfRounds>
          <ImageDanger source={image} />
          <ViewToStyle>
            <EstimatedTimeAndNumberOfRoundsText>
              Numero de Rodadas: {inputNumberOfRounds}
            </EstimatedTimeAndNumberOfRoundsText>
            <EstimatedTimeAndNumberOfRoundsText>
              Tempo estimado da partida de 30 minutos
            </EstimatedTimeAndNumberOfRoundsText>
          </ViewToStyle>
        </EstimatedTimeAndNumberOfRounds>
        <PlayersInside>
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={renderItens}
            ItemSeparatorComponent={renderItemSeparator}
          />
        </PlayersInside>

        <StartGameButton>
          <StartGameButtonText>Iniciar Partida</StartGameButtonText>
        </StartGameButton>
      </Container>
    );
}
export default Room;