import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import Home from '../Home/Home';

export const Fonts = props => {
  const styles = StyleSheet.create({
    textStyle: {
      fontFamily: `NotoSans-${props.type ? props.type : 'Regular'}`,
      fontSize: props.size ? props.size : 16,
      color: props.color ? props.color : 'black',
      ...props.style,
    },
  });

  return (
    <View>
      <Text style={styles.textStyle}>{props.title}</Text>
      <Text style={styles.textStyle}>{props.job}</Text>
    </View>
  );
};
