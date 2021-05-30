import 'react-native-gesture-handler';
import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import FlexBox from './src/Screen/FlexBox';

const App = () => {
  return (
    <View>
      <ScrollView>
        <FlexBox />
      </ScrollView>
    </View>
  );
};

export default App;
