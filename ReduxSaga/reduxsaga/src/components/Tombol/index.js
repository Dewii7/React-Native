import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const Tombol = ({text, action}) => {
  return (
    <TouchableOpacity onPress={action} style={styles.button}>
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    borderRadius: 20,
    width: '30%',
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    elevation: 11,
  },
  textButton: {
    color: '#ffffff',
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Tombol;
