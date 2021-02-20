import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import LottieView from 'lottie-react-native';

export default function Loading() {
  return (
    <BlurView
      blurAmount={20}
      blurType="light"
      style={[StyleSheet.absoluteFill, styles.Container]}>
      <View style={[StyleSheet.absoluteFill, styles.BackDrop]} />
      <LottieView
        autoPlay
        source={require('../../animated/loading.json')}
        style={styles.Loading}
      />
    </BlurView>
  );
}

const styles = StyleSheet.create({
  Container: {
    zIndex: 1,
  },
  BackDrop: {
    backgroundColor: '#00000080',
  },
  Loading: {
    transform: [{ scale: 0.7 }],
  },
});
