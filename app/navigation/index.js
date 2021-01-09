import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainDrawer from './MainDrawer';
// import MainTab from './MainTab';

const RootApp = () => {
  return (
    <NavigationContainer>
      <MainDrawer />
    </NavigationContainer>
  );
};

export default RootApp;
