import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainDrawer from './MainDrawer';
import withLoading from '../HOC/LoadingHOC';
import { useSelector } from 'react-redux';
// import MainTab from './MainTab';

const NavigateLoading = withLoading(NavigationContainer);

const RootApp = () => {
  const { isLoading } = useSelector((state) => state.LoadingReducer);

  return (
    <NavigateLoading isLoading={isLoading}>
      <MainDrawer />
    </NavigateLoading>
  );
};

export default RootApp;
