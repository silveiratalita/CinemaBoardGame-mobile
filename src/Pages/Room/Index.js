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
} from './styles';
import shareImg from '../../../assets/icons/share.png'
import Header from '../../Components/Header';
function Room() {
    const data = [{a: 1}, {a: 1}, {a: 1}];
    function renderItens({item}){
        return (
            <PlayerList>
                <PlayerListText>Nome doplayer q entrou</PlayerListText>
            </PlayerList>
        );
    }
    return (
      <Container>
        <Header />
        <TopContainer>
          <LeftSide>
            <RoomName>Nome da tela</RoomName>
            <RoomLink>Link da sala</RoomLink>
          </LeftSide>
          <RightSide>
            <ShareTouchable>
              <ShareImage source={shareImg} />
            </ShareTouchable>
          </RightSide>
        </TopContainer>
        <PlayersInside>
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={renderItens}
          />
        </PlayersInside>
        <EstimatedTimeAndNumberOfRounds>
          {/* <ImageDangerView> */}
            <ImageDanger source={image} />
          {/* </ImageDangerView> */}

          <ViewToStyle>
            <EstimatedTimeAndNumberOfRoundsText>
              Numero de Rodadas: 4
            </EstimatedTimeAndNumberOfRoundsText>
            <EstimatedTimeAndNumberOfRoundsText>
              Tempo estimado da partida de 30 minutos
            </EstimatedTimeAndNumberOfRoundsText>
          </ViewToStyle>
        </EstimatedTimeAndNumberOfRounds>
        <StartGameButton></StartGameButton>
      </Container>
    );
}
export default Room;