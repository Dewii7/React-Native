import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

const StoryKu = props => {
  return (
    <View style={{alignItems: 'center', marginRight: 20}}>
      <Image
        source={{
          uri: props.picture,
        }}
        style={{
          width: 50,
          height: 50,
          borderRadius: 50 / 2,
        }}
      />
      <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.title}</Text>
    </View>
  );
};

const About = () => {
  return (
    <ScrollView horizontal>
      <View style={{flexDirection: 'row'}}>
        <StoryKu
          title="Me"
          picture="https://scontent-sin6-3.cdninstagram.com/v/t51.12442-15/e35/c67.573.1087.1087a/s150x150/93588087_713380739200606_8398410490741085979_n.jpg?tp=1&_nc_ht=scontent-sin6-3.cdninstagram.com&_nc_cat=110&_nc_ohc=9emyD8-Mc7UAX-jFg-C&edm=AGW0Xe4BAAAA&ccb=7-4&oh=671d58d182e654286573ba9a33a7a1b7&oe=60B88525&_nc_sid=acd11b"
        />
        <StoryKu
          title="Food"
          picture="https://scontent-sin6-2.cdninstagram.com/v/t51.2885-15/s150x150/194272635_542982850029233_8667073787488317368_n.jpg?tp=1&_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=105&_nc_ohc=vZfcrMFCo9oAX-L2w2C&edm=AGW0Xe4BAAAA&ccb=7-4&oh=3ae0e0b00b6c678b44249eab81c4c8e8&oe=60BD35DD&_nc_sid=acd11b"
        />
        <StoryKu
          title="Love"
          picture="https://scontent-sin6-2.cdninstagram.com/v/t51.12442-15/e35/c0.322.828.828a/s150x150/56610516_270345060519051_3675937635568706146_n.jpg?tp=1&_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=103&_nc_ohc=GYFrBvRSWsUAX-Wlve0&edm=AGW0Xe4BAAAA&ccb=7-4&oh=272f99fe6d1d34e1282aaec63c4a6724&oe=60B84BEB&_nc_sid=acd11b"
        />
        <StoryKu
          title="Travel"
          picture="https://scontent-sin6-1.cdninstagram.com/v/t51.12442-15/e35/c30.352.768.768a/s150x150/55872709_1031232823733807_8836770589358646429_n.jpg?tp=1&_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=111&_nc_ohc=QA_vwoDWAboAX9Zbfbs&edm=AGW0Xe4BAAAA&ccb=7-4&oh=9ca454ddf87e66adb5e548b397a11d35&oe=60B8454A&_nc_sid=acd11b"
        />
        <StoryKu
          title="Family"
          picture="https://scontent-sin6-1.cdninstagram.com/v/t51.12442-15/e35/c42.558.1152.1152a/s150x150/92812530_751055185427383_8362566345500603783_n.jpg?tp=1&_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=107&_nc_ohc=y3Z2MVdLgVUAX_pelKc&edm=AGW0Xe4BAAAA&ccb=7-4&oh=f9bd41d0354414b77a2c808e125dfdb8&oe=60B8CB2D&_nc_sid=acd11b"
        />
        <StoryKu
          title="Cook"
          picture="https://scontent-sin6-1.cdninstagram.com/v/t51.12442-15/e35/c46.559.1152.1152a/s150x150/92998550_165668981309460_3941908665912195424_n.jpg?tp=1&_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=100&_nc_ohc=zdOkrAPREngAX-uWGLl&edm=AGW0Xe4BAAAA&ccb=7-4&oh=43a7aeb1df8c39536a3114451887ff18&oe=60B85C3E&_nc_sid=acd11b"
        />
      </View>
    </ScrollView>
  );
};

export default About;
