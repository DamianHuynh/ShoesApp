import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { COLORS, PROPERTIVE } from '../../config/styles';
import Button from '../Button';

const styles = StyleSheet.create({
  checkBoxContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    borderRadius: PROPERTIVE.radius10 - 5,
    borderWidth: 1,
    height: PROPERTIVE.size20 + 5,
    width: PROPERTIVE.size20 + 5,
    marginRight: PROPERTIVE.space1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontWeight: PROPERTIVE.normal,
    fontSize: PROPERTIVE.h3,
  },
});

export default function CheckBox({ label, underlayColor, onChange, checked }) {
  const backgroundColor = checked ? COLORS.brightRed : COLORS.white;
  const borderColor = checked ? COLORS.brightRed : '#000';
  return (
    <Button {...{ underlayColor }} onPress={() => onChange()}>
      <View style={styles.checkBoxContent}>
        <View style={[styles.box, { backgroundColor, borderColor }]}>
          <FeatherIcon name="check" color="white" size={20} />
        </View>
        <Text style={styles.label}>{label}</Text>
      </View>
    </Button>
  );
}
