import { BlurView } from '@react-native-community/blur';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function BackgroundView({ children }) {
  const { top: paddingTop } = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop }]}>
      <LinearGradient
        colors={['#227df9', '#DAD0C6', '#7462f9', '#f3a6ff', '#227df9']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
      <BlurView
        style={StyleSheet.absoluteFill}
        blurType="light"
        blurAmount={20}
        reducedTransparencyFallbackColor="white"
      />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
