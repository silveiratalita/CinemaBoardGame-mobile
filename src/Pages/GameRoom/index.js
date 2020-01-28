import React, {Text} from 'react';
import {LabelImput} from './styles';
import { SafeAreaView } from 'react-native';

function GameRoom() {
    return (
      <SafeAreaView styled={{flex:1}}>
        <LabelImput />
      </SafeAreaView>
    );
}
export default GameRoom;
