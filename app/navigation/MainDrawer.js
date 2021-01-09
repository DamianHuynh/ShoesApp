import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainStack from './MainStack';
import CustomDrawer from '../components/Drawer';

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
      sceneContainerStyle={{ backgroundColor: '#e0e5ec' }}
      drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen name="MainScreen" component={MainStack} />
    </Drawer.Navigator>
  );
}
