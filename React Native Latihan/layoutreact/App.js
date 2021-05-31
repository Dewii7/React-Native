import 'react-native-gesture-handler';
import React, {useState} from 'react';
// import {View, Text, ScrollView} from 'react-native';
import FlexBox from './src/Screen/FlexBox';
import Home from './src/Screen/Home';
import About from './src/Screen/About';
import Products from './src/Screen/Products';
import Contact from './src/Screen/Contact';

const App = () => {
  const [active, setActive] = useState(0);
  const tabData = ['Home', 'About', 'Products', 'Contact'];
  const moveData = index => {
    setActive(index);
  };
  return (
    <>
      <FlexBox tabData={tabData} active={active} move={moveData} />
      {active === 0 && <Home />}
      {active === 1 && <About />}
      {active === 2 && <Products />}
      {active === 3 && <Contact />}
    </>
  );
};

export default App;
