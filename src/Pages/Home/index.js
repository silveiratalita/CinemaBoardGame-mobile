import React from 'react';
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
import { SafeAreaView } from 'react-native';

function Home({navigation,route}) {
  const teste = 'teste';
  const { nome,matches } = route.params;
    const partidas = [
      {
        id: 0,
        jogadores: 'talita e Gustavo',
        data: '20/10/2019',
        vencedor: 'Talita',
      },

      {
        id: 1,
        jogadores: 'talita e owli',
        data: '20/10/2019',
        vencedor: 'Talita',
      },
      {
        id: 1,
        jogadores: 'talita e owli',
        data: '20/10/2019',
        vencedor: 'Talita',
      },
      {
        id: 1,
        jogadores: 'talita e owli',
        data: '20/10/2019',
      },
      {
        id: 1,
        jogadores: 'talita e owli',
        data: '20/10/2019',
        vencedor: 'Talita',
      },
      {
        id: 1,
        jogadores: 'talita e owli',
        data: '20/10/2019',
        vencedor: 'Talita',
      },
      {
        id: 1,
        jogadores: 'talita e owli',
        data: '20/10/2019',
      },
      {
        id: 1,
        jogadores: 'talita e owli',
        data: '20/10/2019',
        vencedor: 'Talita',
      },
      {
        id: 1,
        jogadores: 'talita e owli',
        data: '20/10/2019',
      },
      {
        id: 1,
        jogadores: 'talita e owli',
        data: '20/10/2019',
        vencedor: 'Talita',
      },
      {
        id: 1,
        jogadores: 'talita e owli',
        data: '20/10/2019',
        vencedor: 'Talita',
      },

      {
        id: 1,
        jogadores: 'talita e owli',
        data: '20/10/2019',
        vencedor: 'Talita',
      },
      {
        id: 1,
        jogadores: 'talita e owli',
        data: '20/10/2019',
      },
      {
        id: 1,
        jogadores: 'talita e owli',
        data: '20/10/2019',
      },
      {
        id: 1,
        jogadores: 'talita e owli',
        data: '20/10/2019',
        vencedor: 'Talita',
      },
      {
        id: 1,
        jogadores: 'talita e owli',
        data: '20/10/2019',
        vencedor: 'Talita',
      },
      {
        id: 1,
        jogadores: 'talita e owli',
        data: '20/10/2019',
        vencedor: 'Talita',
      },
      {
        id: 1,
        jogadores: 'talita e owli',
        data: '20/10/2019',
        vencedor: 'Talita',
      },
      {
        id: 1,
        jogadores: 'talita e owli',
        data: '20/10/2019',
        vencedor: 'Talita',
      },
    ];
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
      <PlayerName>Olá {nome},</PlayerName>
      <GameList>Veja suas partidas anteriores:</GameList>
      <GamesView>
        <FlatListItens
          data={matches}
          renderItem={renderItens}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={renderSeparator}
        />
      </GamesView>
      <CreateNewGameButton onPress={() => navigation.navigate('CreateGameRoom')}>
        <CreateNewGameText>Criar Partida</CreateNewGameText>
      </CreateNewGameButton>
    </Container>
  );
  }
  
export default Home;