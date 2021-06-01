import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

export default function Home() {
  return (
    <ScrollView>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Dewi Anggraini</Text>
          <Text style={{fontSize: 15}}>Mobile Developer</Text>
        </View>
      </View>
    </ScrollView>
  );
}
