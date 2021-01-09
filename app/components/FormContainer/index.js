import React from 'react';
import { View } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../../config/styles';

import styles from './styles';
const HORIZONTAL = { start: { x: 0, y: 0 }, end: { x: 1, y: 0 } };
const colors = ['#ff8368', COLORS.brightRed];

export default function FormContainer({ children, footer }) {
  return (
    <LinearGradient
      start={HORIZONTAL.start}
      end={HORIZONTAL.end}
      colors={colors}
      style={styles.main}>
      <View style={styles.header}>
        <LinearGradient
          start={HORIZONTAL.start}
          end={HORIZONTAL.end}
          colors={colors}
          style={styles.headerBackground}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.innerContent}>{children}</View>
      </View>
      <View style={styles.footer}>{footer}</View>
    </LinearGradient>
  );
}
