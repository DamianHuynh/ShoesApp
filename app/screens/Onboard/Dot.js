import React from 'react';
import { Animated, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { COLORS, PROPERTIVE } from '../../config/styles';

export default function Dot({ index, x, onPress }) {
  const scale = x.interpolate({
    inputRange: [
      (index - 1) * PROPERTIVE.width,
      index * PROPERTIVE.width,
      (index + 1) * PROPERTIVE.width,
    ],
    outputRange: [0.8, 1.4, 0.8],
    extrapolate: 'clamp',
  });

  const opacity = x.interpolate({
    inputRange: [
      (index - 1) * PROPERTIVE.width,
      index * PROPERTIVE.width,
      (index + 1) * PROPERTIVE.width,
    ],
    outputRange: [0.5, 1, 0.5],
    extrapolate: 'clamp',
  });

  return (
    <TouchableWithoutFeedback {...{ onPress }}>
      <Animated.View
        style={[styles.dot, { opacity, transform: [{ scale }] }]}
      />
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 10,
    backgroundColor: COLORS.strongCyan,
  },
});
