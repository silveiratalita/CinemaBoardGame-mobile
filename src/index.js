/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */




import 'react-native-gesture-handler';
import './config/ReactotronConfig';
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import CreateGameRoom from './Pages/CreateGameRoom';
import Room from './Pages/Room/Index';
import GameRoom from './Pages/GameRoom/index';
import MyStack from './routes';
import './config/ReactotronConfig';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default function App() {
  
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};


