import React from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text} from 'react-native';

export default function Home(props) {
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('About')}>
        <Text>Back to About yaaaa</Text>
      </TouchableOpacity>
    </View>
  );
}
