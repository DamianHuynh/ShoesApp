import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../../components/Button';
import { COLORS } from '../../config/styles';

export default function Subtitle({ subtitle, description, last, onPress, x }) {
  const colors = last
    ? ['#ff8368', COLORS.brightRed]
    : [COLORS.lightGray, COLORS.darkGray];

  const underlayColor = last ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.1)';

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <LinearGradient {...{ colors }} style={styles.button}>
        <Button height={50} width={250} {...{ underlayColor }} {...{ onPress }}>
          <Text>{!last ? 'Next' : "Let's get started"}</Text>
        </Button>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  subtitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    lineHeight: 30,
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    borderRadius: 30,
  },
});
