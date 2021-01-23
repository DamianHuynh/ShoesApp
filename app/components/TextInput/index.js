import React, { useEffect, useRef } from 'react';
import { View, TextInput as RNTextInput, Text, Animated } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { COLORS } from '../../config/styles';
import styles from './styles';

export default function TextInput({ icon, errors, touched, ...props }) {
  const animated = useRef(new Animated.Value(0)).current;

  const translateY = animated.interpolate({
    inputRange: [0, 1],
    outputRange: [10, 0],
  });

  const animation = Animated.timing(animated, {
    toValue: 1,
    duration: 500,
    // delay: 300,
    useNativeDriver: true,
  });

  useEffect(() => {
    if (touched) {
      animation.start();
    }
    return () => {
      animation.stop();
    };
  }, [animation, touched]);

  const color = !touched
    ? COLORS.darkGray
    : errors
    ? COLORS.vividRed
    : COLORS.strongCyan;
  const backgroundColor = errors ? COLORS.vividRed : COLORS.strongCyan;

  return (
    <>
      <View
        style={{
          ...styles.inputContainer,
          borderColor: color,
        }}>
        <View style={styles.iconContainer}>
          <FeatherIcon name={icon} size={16} {...{ color }} />
        </View>
        <RNTextInput
          style={styles.inputField}
          underlineColorAndroid="transparent"
          placeholderTextColor={COLORS.darkGray}
          {...props}
        />
        {touched && (
          <Animated.View
            style={{
              ...styles.validContainer,
              backgroundColor,
              opacity: animated,
            }}>
            <FeatherIcon
              name={!errors ? 'check' : 'x'}
              color="white"
              size={16}
            />
          </Animated.View>
        )}
      </View>

      <Animated.View
        style={[
          styles.errorsContent,
          {
            opacity: animated,
            transform: [{ translateY }],
          },
        ]}>
        <Text style={styles.textErrors}>{errors}</Text>
      </Animated.View>
    </>
  );
}
