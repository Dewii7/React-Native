import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
// import {ToggleButton} from 'react-native-paper';

const App = ({tabData, active, move}) => {
  return (
    <View style={styles(active).container}>
      {tabData.map((title, index) => (
        <TouchableOpacity
          style={styles(active, index).tabActive}
          key={index}
          onPress={() => move(index)}>
          <Text style={styles(active, index).textStyle}>{title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default App;

const styles = (active, index) =>
  StyleSheet.create({
    container: {
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    tabActive: {
      backgroundColor: active === index ? '#48C9B0' : null,
      padding: 20,
      borderRadius: 50,
    },
    textStyle: {
      color: active === index ? 'white' : 'black',
    },
  });
