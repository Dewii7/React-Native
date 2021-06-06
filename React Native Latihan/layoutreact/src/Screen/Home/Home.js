import 'react-native-gesture-handler';
import React from 'react';
import {View, NotoSans, Image, ScrollView} from 'react-native';
import {Fonts} from '../NotoSans/NotoSans';

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
          <NotoSans
            // title={{name: 'Dewi Anggraini'}}
            style={{fontSize: 20, fontWeight: 'bold'}}
          />
          <NotoSans
            //  title={{job: 'Mobile Developer'}}
            style={{fontSize: 15}}
          />
        </View>
      </View>
    </ScrollView>
  );
}
