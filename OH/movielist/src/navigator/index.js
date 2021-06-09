import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomePage from '../pages/HomePage';
import Login from '../pages/Login';
import {connect} from 'react-redux';

const Stack = createStackNavigator();

const Nav = ({isLogin}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {isLogin ? (
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = state => ({
  isLogin: state.loginReducer.isLogin,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
