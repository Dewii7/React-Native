import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import FlexBox from './src/Screen/FlexBox';
import Home from './src/Screen/Home';
import About from './src/Screen/About';
import Products from './src/Screen/Products';
import Contact from './src/Screen/Contact';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomTab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  const [active, setActive] = useState(0);
  const tabData = ['Home', 'About', 'Products', 'Contact', 'Profile'];
  const moveData = index => {
    setActive(index);
  };
  return (
    <ScrollView>
      <NavigationContainer>
        <FlexBox tabData={tabData} active={active} move={moveData} />
        {active === 0 && <Home />}
        {active === 1 && <About />}
        {active === 2 && <Products />}
        {active === 3 && <Contact />}

        <Stack.Navigator>
          <Stack.Screen name="Home" component={MyBottomTab} />
        </Stack.Navigator>
      </NavigationContainer>
    </ScrollView>
  );
};

const MyBottomTab = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        options={{
          tabBarIcon: () => <AntDesign name="home" size={20} color="white" />,
        }}
        name="Home"
        component={Home}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="face-profile-woman"
              size={20}
              color="white"
            />
          ),
        }}
        name="About"
        component={About}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: () => (
            <AntDesign name="contacts" size={20} color="white" />
          ),
        }}
        name="Contact"
        component={Contact}
      />
    </BottomTab.Navigator>
  );
};

export default App;
