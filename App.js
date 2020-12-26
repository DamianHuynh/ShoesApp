import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { enableScreens } from 'react-native-screens';
import HomeScreens from './app/screens/Home';
import DetailScreens from './app/screens/Details';
enableScreens();
const Tab = createBottomTabNavigator();
const Stack = createSharedElementStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={HomeScreens} />
        <Stack.Screen name="Details" component={DetailScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
