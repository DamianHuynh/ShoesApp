import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import { GlassView } from '../../components';
import { COLORS, PROPERTIVE } from '../../config/styles';

import { SCREEN } from '../../navigation/Constant';

export default function BestSellItem({ bestSellItem }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        navigation.push(SCREEN.DETAIL_NO_ANIMATION, {
          product: bestSellItem,
        })
      }>
      <GlassView style={styles.BestSellItem}>
        <Image
          source={{ uri: bestSellItem.image }}
          style={styles.BestSellImage}
        />
        <View style={styles.BestSellInfo}>
          <Text style={styles.ProductName}>{bestSellItem.name}</Text>
          <Text style={styles.ProductShortDes}>
            {bestSellItem.shortDescription}
          </Text>
          <Text style={styles.ProductPrice}>
            <IconMaterial
              name="attach-money"
              color={COLORS.brightRed}
              size={16}
            />
            {bestSellItem.price}
          </Text>
        </View>
      </GlassView>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  BestSellItem: {
    flexDirection: 'row',
    height: 150,
    borderRadius: PROPERTIVE.radius15,
  },
  BestSellImage: {
    width: 150,
    aspectRatio: 1,
  },
  ProductName: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    textTransform: 'capitalize',
  },
  ProductPrice: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
  },
  ProductShortDes: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    opacity: 0.5,
  },
  BestSellInfo: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: PROPERTIVE.space2,
    paddingVertical: PROPERTIVE.space1,
  },
});
