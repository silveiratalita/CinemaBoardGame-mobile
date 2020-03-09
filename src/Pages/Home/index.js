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
  const teste = 'teste';
  // const {userData, matchesResponse} = route.params;
  const { userData } = route.params;
  const matchesResponse = [
    {
      id: 1,
      players: ['Nilo', 'Sabrina', 'Andrey', 'Gustavo'],
      winner: 'Andrey',
      date: '19/02/2020',
    },
    {
      id: 2,
      players: ['Nilo', 'Sabrina', 'Andrey', 'Gustavo'],
      winner: 'Nilo',
      date: '19/02/2020',
    },
    {
      id: 3,
      players: ['Nilo', 'Sabrina', 'Andrey', 'Gustavo'],
      winner: 'Gustavo',
      date: '19/02/2020',
    },
    {
      id: 4,
      players: ['Nilo', 'Sabrina', 'Andrey', 'Gustavo'],
      winner: 'Gustavo',
      date: '19/02/2020',
    },
    {
      id: 5,
      players: ['Nilo', 'Sabrina', 'Andrey', 'Gustavo'],
      winner: 'Gustavo',
      date: '19/02/2020',
    },
  ];
  const matches = matchesResponse.map(matche => obj = {
    players: matche.players.join(', '),
    winner: matche.winner,
    date: matche.date,
  });

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
          data={matches}
          renderItem={renderItens}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={renderSeparator}
        />
      </GamesView>
      <CreateNewGameButton
        onPress={() => navigation.navigate('CreateGameRoom',{userData})}>
        <CreateNewGameText>Criar Partida</CreateNewGameText>
      </CreateNewGameButton>
    </Container>
  );
  }
  
export default Home;