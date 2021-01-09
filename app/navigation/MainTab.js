import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AnimatedTabBar from 'curved-bottom-navigation-bar';

import Icon from 'react-native-vector-icons/AntDesign';
import HomeScreens from '../screens/Home';
import CartScreen from '../screens/Cart';
const tabs = {
  Home: {
    icon: ({ progress }) => <Icon name="home" size={24} />,
  },
  Profile: {
    icon: ({ progress }) => <Icon name="user" size={24} />,
  },
  Profile1: {
    icon: ({ progress }) => <Icon name="user" size={24} />,
  },
  Profile2: {
    icon: ({ progress }) => <Icon name="user" size={24} />,
  },
};

const Tab = createBottomTabNavigator();

export default function MainTab() {
  return (
    <Tab.Navigator
      tabBar={(props) => <AnimatedTabBar tabs={tabs} {...props} />}>
      <Tab.Screen name="Home" component={HomeScreens} />
      <Tab.Screen name="Profile" component={CartScreen} />
      <Tab.Screen name="Profile1" component={CartScreen} />
      <Tab.Screen name="Profile2" component={CartScreen} />
    </Tab.Navigator>
  );
}
