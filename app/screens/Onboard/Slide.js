import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PROPERTIVE } from '../../config/styles';

export default function Slide() {
  return <View style={styles.slide} />;
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    width: PROPERTIVE.width,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
