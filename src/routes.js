
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import './config/ReactotronConfig';
import Login from './Pages/Login'
import Home from './Pages/Home';
import CreateGameRoom from './Pages/CreateGameRoom';
import Register from './Pages/Register';
// import Room from './Pages/Room';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        options={{title: 'Dashboard'}}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{title: 'Registro'}}
        name="Register"
        component={Register}
      />
      <Stack.Screen
        options={{title: 'Nova Sala'}}
        name="CreateGameRoom"
        component={CreateGameRoom}
      />
      {/* <Stack.Screen
        options={{title: 'Sala'}}
        name="Room"
        component={Room}
      /> */}
    </Stack.Navigator>
  );
}
export default MyStack;