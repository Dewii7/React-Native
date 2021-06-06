import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Home from '../Home/Home';

export default function Login(props) {
  return (
    <View>
      <TouchableOpacity onPress={() => props.navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({});
