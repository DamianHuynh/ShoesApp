import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AnimatedTabBar from 'curved-bottom-navigation-bar';

import Icon from 'react-native-vector-icons/AntDesign';
import HomeScreens from '../screens/Home';
import CartScreen from '../screens/Cart';
import Register from '../screens/Register';
import { GlassView } from '../components';
const tabs = {
  Blank: {
    icon: ({ progress }) => <Icon name="hearto" size={24} />,
  },
  Home: {
    icon: ({ progress }) => <Icon name="home" size={24} />,
  },
  // Blank1: {
  //   icon: ({ progress }) => <Icon name="hearto" size={24} />,
  // },
  Blank2: {
    icon: ({ progress }) => <Icon name="shoppingcart" size={24} />,
  },
};

const Tab = createBottomTabNavigator();

export default function MainTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => (
        <AnimatedTabBar
          dotColor="#ffffffCC"
          barColor="#ffffffCC"
          tabs={tabs}
          {...props}
        />
      )}>
      <Tab.Screen name="Blank" component={Register} />
      <Tab.Screen name="Home" component={CartScreen} />
      <Tab.Screen name="Blank2" component={Register} />
    </Tab.Navigator>
  );
}
