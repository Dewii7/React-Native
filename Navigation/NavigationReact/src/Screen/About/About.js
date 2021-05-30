import React from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text} from 'react-native';

export default function About(props) {
  return (
    <View>
      <Text>About</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
        <Text>Kita ke Home cuiii</Text>
      </TouchableOpacity>
    </View>
  );
}
