import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import SignUp from './src/Screen/SignUp/SignUp';
import Store from './src/Screen/Store/Store';

export default function App() {
  return (
    <Provider store={Store}>
      <SafeAreaView>
        <SignUp />
      </SafeAreaView>
    </Provider>
  );
}
