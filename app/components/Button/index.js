import React from 'react';
import { TouchableHighlight, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function Button({
  children,
  height,
  width,
  onPress,
  underlayColor,
  disabled,
  style,
}) {
  return (
    <TouchableHighlight
      style={[{ height: height, width: width }, styles.buttonStyle, style]}
      disabled={disabled}
      underlayColor={underlayColor}
      onPress={onPress}>
      {children}
    </TouchableHighlight>
  );
}
