import React, { useEffect } from 'react';
import {
  HomeContainer,
  GamesView,
  FlatListItens,
  GamesViewText,
  Separator,
  PlayerName,
  GameList,
  CreateNewGameButton,
  Container,
  CreateNewGameText,
  GamesItenView,
} from './styles';
import Header from '../../Components/Header';
import api from '../../services/api';
import { SafeAreaView } from 'react-native';

function Home({navigation,route}) {


   const {userData, matchesResponse} = route.params;
  let matchesValues = [];
console.tron.log(matchesResponse)
  matchesValue = matchesResponse.data.map(matche => {
       obj = {
      winner: matche.winner,
      date: matche.date,
      id: matche.id,
      players:matche.players.map(e=>e.username).join(', ')
       }
    matchesValues.push(obj)
    })

   
   
  
  // const test=matchesValues.map(matche =>
  //      (obj = {
  //       players: matche.players.join(', '),
  //        winner: matche.winner,
  //        date: matche.date,
  //      }),
  //  );

  function renderSeparator() {
    return (
      <Separator/>
    );
  }
    function renderItens({item}) {
      return (
        <GamesItenView>
          <GamesViewText>{`Jogadores: ${item.players}`}</GamesViewText>
          <GamesViewText>{`Data: ${item.date}`}</GamesViewText>
          <GamesViewText>{`Vencedor: ${item.winner}`}</GamesViewText>
        </GamesItenView>
      );
    }

  return (
    <Container>
      <Header
        title={'Nome do jogador'}
        title2={'qualquer coisas'}
        title3={'partidas'}
        isToShowHeaderComplete={false}
      />
      <PlayerName>Olá {userData.username},</PlayerName>
      <GameList>Veja suas partidas anteriores:</GameList>
      <GamesView>
        <FlatListItens
          data={matchesValues}
          renderItem={renderItens}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={renderSeparator}
        />
      </GamesView>
      <CreateNewGameButton
        onPress={() => navigation.navigate('CreateGameRoom', {userData})}>
        <CreateNewGameText>Criar Partida</CreateNewGameText>
      </CreateNewGameButton>
    </Container>
  );
  }
  
export default Home;