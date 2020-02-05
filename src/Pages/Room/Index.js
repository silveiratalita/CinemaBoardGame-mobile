import React from 'react';
import { SafeAreaView, Text, FlatList } from 'react-native';
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
      </Container>
    );
}
export default Room;