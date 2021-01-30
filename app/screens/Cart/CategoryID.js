import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ({ categoryItem, onPress, activeID }) {
  const opacity = categoryItem.id === activeID ? 1 : 0.5;
  return (
    <TouchableOpacity
      disabled={categoryItem.id === activeID}
      onPress={() => onPress(categoryItem.id)}>
      <Text style={[styles.CategoryTxt, { opacity }]}>
        {categoryItem.category}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  CategoryTxt: {
    fontSize: 22,
    fontFamily: 'Poppins-Regular',
    textTransform: 'capitalize',
  },
});
