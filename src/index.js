/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import './config/ReactotronConfig';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import CreateGameRoom from './Pages/CreateGameRoom';
import Room from './Pages/Room/Index';
import GameRoom from './Pages/GameRoom/index';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return <Room />;
};

export default App;
