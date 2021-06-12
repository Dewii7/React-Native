import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const Home = () => {
  const name = useSelector(state => state.reducerLogin.name);
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
});
