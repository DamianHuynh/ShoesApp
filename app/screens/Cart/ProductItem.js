import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import * as Themes from '../../config/styles';
import { GlassView } from '../../components';
import { SharedElement } from 'react-native-shared-element';
import { SCREEN } from '../../navigation/Constant';
import { useNavigation } from '@react-navigation/native';

export default function ProductItem({ productItem }) {
  const navigation = useNavigation();
  return (
    <GlassView transparent style={styles.ProductContainer}>
      <TouchableOpacity
        style={styles.ProductImage}
        onPress={() => {
          console.log(`id.${productItem.alias}.photo`);
          navigation.push(SCREEN.DETAIL_NO_ANIMATION, { product: productItem });
        }}>
        <SharedElement
          id={`id.${productItem.alias}.photo`}
          style={StyleSheet.absoluteFill}>
          <Image
            source={{ uri: productItem.image }}
            style={StyleSheet.absoluteFill}
            resizeMode="contain"
          />
        </SharedElement>
      </TouchableOpacity>
      <GlassView style={styles.ProductInformation}>
        <Text style={styles.ProductName}>{productItem.name}</Text>
        <View style={styles.ProductPriceContent}>
          <Text style={{ fontSize: Themes.PROPERTIVE.h3 }}>
            <IconMaterial
              name="attach-money"
              color={Themes.COLORS.brightRed}
              size={Themes.PROPERTIVE.h4}
            />
            {productItem.price}
          </Text>
          <TouchableOpacity
            style={styles.ProductFavor}
            onPress={() => console.log('favor')}>
            <IconAntDesign name="heart" size={15} color="#fff" />
          </TouchableOpacity>
        </View>
      </GlassView>
    </GlassView>
  );
}

const styles = StyleSheet.create({
  ProductContainer: {
    borderRadius: 12,
    width: Themes.PROPERTIVE.width * 0.43,
  },
  ProductImage: {
    height: 250,
    width: '100%',
    transform: [{ rotate: '-5deg' }, { translateY: -40 }],
  },
  ProductInformation: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
    width: '100%',
    height: 100,
    bottom: 0,
    position: 'absolute',
  },
  ProductName: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  ProductPriceContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ProductFavor: {
    width: 32,
    height: 32,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Themes.COLORS.brightRed,
  },
});
