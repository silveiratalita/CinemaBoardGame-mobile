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

function Home() {
    const teste = 'teste';
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
            <GamesViewText>{`Jogadores: ${item.jogadores}`}</GamesViewText>
            <GamesViewText>{`Data: ${item.data}`}</GamesViewText>
            <GamesViewText>{`Vencedor: ${item.vencedor}`}</GamesViewText>
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
      <PlayerName>Olá Talita,</PlayerName>
      <GameList>Veja suas partidas anteriores:</GameList>
      <GamesView>
        <FlatListItens
          data={partidas}
          renderItem={renderItens}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={renderSeparator}
      
        />
      </GamesView>
      <CreateNewGameButton>
        <CreateNewGameText>Criar Partida</CreateNewGameText>
      </CreateNewGameButton>
    </Container>
  );
  }
  
export default Home;