import React from 'react';
import {SafeAreaView} from 'react-native';
import Navigator from './src/navigator';
import Store from './src/redux/Store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={Store}>
      <Navigator />
    </Provider>
  );
};

export default App;
