import React,{useState} from 'react';

import {
  Container,
  PlayerTime,
  PlayerTimeNameText,
  CardQuestion,
  PlayerTimeView,
  Question,
  CardAnswerMovie,
  MultipleChoiceOption,
  MultipleChoiceOptionText,
} from './styles';
import { FlatList, ScrollView } from 'react-native';

function GameRoom() {
    const [isAnswerVisible, setIsAnswerVisible] = useState(true);
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

  const tipos = [
    {
      1: 'multiple',
      2: 'mimicry',
      3: 'whatMovie',
    },
  ];
    function returnMultipleChoiceAnswerComponent() {
      return (
        <CardAnswerMovie>
          <MultipleChoiceOption>
            <MultipleChoiceOptionText>a)Viuva Negra</MultipleChoiceOptionText>
          </MultipleChoiceOption>
          <MultipleChoiceOption>
            <MultipleChoiceOptionText>b)Viuva branca</MultipleChoiceOptionText>
          </MultipleChoiceOption>
        </CardAnswerMovie>
      );
    }
const tipo = 1;
  function returnAnswer(tipo) {
    if (tipo === 1) {
      returnMultipleChoiceAnswerComponent();
    }
    if (tipo === 2) {
      returnMimicryComponent();
    }
    if (tipo === 3) {
      returnWhatMovieAnswerComponent();
    }
  }

  function renderItens() {
    return (
      <PlayerTime>
        <PlayerTimeNameText>Talita</PlayerTimeNameText>
      </PlayerTime>
    );
  }
  return (
    <Container>
      <PlayerTimeView>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          horizontal
          renderItem={renderItens}
        />
      </PlayerTimeView>

      <ScrollView>
        <CardQuestion>
          <Question>Qual o nome da mulher ruiva no file avengers?</Question>
        </CardQuestion>
        {isAnswerVisible && returnAnswer()}
      </ScrollView>
    </Container>
  );
}

export default GameRoom;
