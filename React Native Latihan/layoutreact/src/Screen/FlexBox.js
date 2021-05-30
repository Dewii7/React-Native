import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const FlexBox = () => {
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 10,
        }}>
        <Text>Home</Text>
        <Text>About</Text>
        <Text>Products</Text>
        <Text>Contact</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Image
          source={{uri: 'https://reactjs.org/logo-og.png'}}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            marginRight: 15,
            marginLeft: 15,
          }}
        />
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Dewi Anggraini
          </Text>
          <Text>Mobile Developer</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default FlexBox;
