import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

// PAGES
import Login from '../pages/Login/';
import Home from '../pages/Home/';

const Stack = createStackNavigator();

const Navigator = () => {
  // ini utk pindah halaman ke tmpt lain pake useSelector dg ternary
  const isLogin = useSelector(state => state.reducerLogin.isLogin);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogin ? (
          <Stack.Screen name="home" component={Home} />
        ) : (
          <Stack.Screen name="login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
