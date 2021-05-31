import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
// import {ToggleButton} from 'react-native-paper';

const App = ({tabData, active, move}) => {
  return (
    <ScrollView>
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
    </ScrollView>
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
      backgroundColor: active === index ? 'red' : null,
      padding: 20,
      borderRadius: 50,
    },
    textStyle: {
      color: active === index ? 'white' : 'black',
    },
  });
