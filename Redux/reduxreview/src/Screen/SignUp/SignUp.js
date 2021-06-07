import React from 'react';
import {SafeAreaView, TextInput, Button, Text} from 'react-native';

export default function SignUp() {
  return (
    <SafeAreaView>
      <Text>Apps</Text>
      <TextInput placeholder="name" />
      <TextInput placeholder="email" />
      <TextInput placeholder="password" />
      <Button title="SIGN UP" color="blue" />
    </SafeAreaView>
  );
}
