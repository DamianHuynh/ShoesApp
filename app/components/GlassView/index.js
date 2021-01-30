import React from 'react';
import { BlurView } from '@react-native-community/blur';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';

export default function GlassView({ children, ...props }) {
  const blurAmount = props.transparent ? 10 : 5;
  const colors = props.transparent
    ? ['#EDEFF120', '#DAD0C620']
    : ['#FFFFFF', '#FFFFFF00'];

  return (
    <BlurView
      blurType="light"
      blurAmount={blurAmount}
      reducedTransparencyFallbackColor="white"
      {...props}>
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        locations={[0.9, 0]}
        style={StyleSheet.absoluteFill}
      />
      {children}
    </BlurView>
  );
}
