import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainStack from './MainStack';
import CustomDrawer from '../components/Drawer';
import { COLORS } from '../config/styles';
import { Easing } from 'react-native';

const Drawer = createDrawerNavigator();

export default function MainDrawer() {
  return (
    <Drawer.Navigator
      drawerType="slide"
      overlayColor="transparent"
      edgeWidth={0}
      drawerStyle={{
        backgroundColor: '#e0e5ec',
        width: '40%',
      }}
      // options={() => ({
      //   gestureEnabled: false,
      //   transitionSpec: {
      //     open: {
      //       animation: 'timing',
      //       config: { duration: 1000, easing: Easing.inOut(Easing.linear) },
      //     },
      //     close: {
      //       animation: 'timing',
      //       config: { duration: 1000, easing: Easing.inOut(Easing.linear) },
      //     },
      //   },
      // })}
      sceneContainerStyle={{ backgroundColor: '#e0e5ec' }}
      drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen name="MainScreen" component={MainStack} />
    </Drawer.Navigator>
  );
}
