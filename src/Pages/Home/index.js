import React from 'react';
import {
  HomeContainer,
  GamesView,
  FlatListItens,
  GamesViewText,
  Separator,
} from './styles';
import Header from '../../Components/Header';

function Home() {
    const teste = 'teste';
    const partidas = [
      {
        id: 0,
        jogadores: 'talita e Gustavo',
        data: '20/10/2019',
      },
      {
        id: 1,
        jogadores: 'talita e owli',
        data: '20/10/2019',
      },
    ];
  function renderSeparator() {
    return (
      <Separator/>
    );
  }
    function renderItens({item}) {
      return (
        <GamesView>
          <GamesViewText>Jogadores: </GamesViewText>
          <GamesViewText>{item.jogadores}</GamesViewText>
          <GamesViewText>Data: </GamesViewText>
          <GamesViewText>{item.data}</GamesViewText>
        </GamesView>
      );
    }
    return (
      <HomeContainer>
        <Header
          title={'Nome do jogador'}
          title2={'qualquer coisas'}
          title3={'partidas'}
        />

        <FlatListItens
          data={partidas}
          renderItem={renderItens}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={renderSeparator}
        />
      </HomeContainer>
    );
}

export default Home;