import React, { useEffect, useRef } from 'react';
import { Easing, Animated } from 'react-native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import DetailsNoAnimated from '../screens/DetailsNoAnimated';
import HomeScreen from '../screens/Home';
import DetailScreen from '../screens/Detail';
import LoginScreen from '../screens/Login';
import { SCREEN } from './Constant';

const Stack = createSharedElementStackNavigator();

const OpacityTransiton = () => ({
  gestureEnabled: false,
  transitionSpec: {
    open: {
      animation: 'timing',
      config: { duration: 500, easing: Easing.inOut(Easing.ease) },
    },
    close: {
      animation: 'timing',
      config: { duration: 500, easing: Easing.inOut(Easing.ease) },
    },
  },
  cardStyleInterpolator: ({ current: { progress } }) => {
    return {
      cardStyle: {
        opacity: progress,
      },
    };
  },
});
const SmoothTransiton = () => ({
  gestureEnabled: false,
  transitionSpec: {
    open: {
      animation: 'timing',
      config: { duration: 500, easing: Easing.inOut(Easing.linear) },
    },
    close: {
      animation: 'timing',
      config: { duration: 500, easing: Easing.inOut(Easing.linear) },
    },
  },
});
const FromBotTransiton = () => ({
  gestureEnabled: false,
  transitionSpec: {
    open: {
      animation: 'timing',
      config: { duration: 700, easing: Easing.inOut(Easing.linear) },
    },
    close: {
      animation: 'timing',
      config: { duration: 700, easing: Easing.inOut(Easing.linear) },
    },
  },
  cardStyleInterpolator: ({ current: { progress }, next, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateY: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.height, 0],
            }),
          },
          {
            scale: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.1],
                })
              : 1,
          },
        ],
      },
      overlayStyle: {
        opacity: progress,
      },
    };
  },
});

export default function MainStack(props) {
  const animation = useRef(new Animated.Value(0)).current;
  const scale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('drawerOpen', (e) => {
      Animated.timing(animation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    });

    return unsubscribe;
  }, [props.navigation, animation]);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('drawerClose', (e) => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    });

    return unsubscribe;
  }, [props.navigation, animation]);
  return (
    <Animated.View style={{ flex: 1, transform: [{ scale }] }}>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name={SCREEN.HOME} component={HomeScreen} />
        <Stack.Screen
          name={SCREEN.DETAIL_NO_ANIMATION}
          component={DetailsNoAnimated}
          options={SmoothTransiton}
        />
        <Stack.Screen
          name={SCREEN.DETAIL}
          component={DetailScreen}
          options={OpacityTransiton}
        />
        <Stack.Screen
          name={SCREEN.LOGIN}
          component={LoginScreen}
          options={FromBotTransiton}
        />
      </Stack.Navigator>
    </Animated.View>
  );
}
