import React from 'react';
import Header from '../../Components/Header';
import { SafeAreaView } from 'react-native';

function Login() {
    const title = 'aqui é o titulo';
    return (
      <SafeAreaView>
        <Header title={title} />
              </SafeAreaView>
    );

}

export default Login;