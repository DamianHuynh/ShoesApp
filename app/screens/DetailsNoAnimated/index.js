import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

import {
  appStyle,
  COLORS,
  FLATLISTRESET,
  PROPERTIVE,
} from '../../config/styles';
import { API } from '../../config';

function DetailsNoAnimated({ navigation, route }) {
  const { product } = route.params;
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    axios({ method: 'GET', url: `${API}getbyid?id=${product.id}` })
      .then(({ data: { content } }) => setProductDetails(content))
      .catch((err) => console.log(err));
  }, [product.id]);

  return (
    <SafeAreaView style={{ ...appStyle.WrapScreen }}>
      <View style={{ ...appStyle.WrapContent }}>
        <View style={styles.Header}>
          <View style={{ ...styles.HeaderContent }}>
            <TouchableHighlight
              underlayColor={COLORS.lightGray}
              onPress={() => navigation.goBack()}
              style={{
                ...styles.HeaderButton,
              }}>
              <IconAntDesign name="left" size={20} />
            </TouchableHighlight>
            <TouchableHighlight style={{ ...styles.HeaderButton }}>
              <IconAntDesign name="hearto" size={20} />
            </TouchableHighlight>
          </View>
        </View>
        <View style={{ ...styles.ProductOverView }}>
          <Image
            source={{ uri: product.image }}
            style={{ ...styles.ProductImage }}
          />

          <Text style={{ ...appStyle.TitleSection }}>Size</Text>
          <FlatList
            style={{ ...styles.ProductSizeContent }}
            bounces={false}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={productDetails.size}
            keyExtractor={(item) => item}
            contentContainerStyle={{ marginVertical: PROPERTIVE.space1 }}
            renderItem={({ item }) => (
              <View style={{ ...styles.ProductSize }}>
                <Text>{item}</Text>
              </View>
            )}
          />

          <View>
            <TouchableHighlight style={{ ...styles.BuyButton }}>
              <View style={{ ...styles.BuyButtonContent }}>
                <Text style={{ ...styles.BuyButtonTxt }}>Buy</Text>
                <IconAntDesign
                  name="shoppingcart"
                  color={COLORS.white}
                  size={PROPERTIVE.h2}
                />
              </View>
            </TouchableHighlight>
          </View>
        </View>

        <View style={{ ...styles.ProductInfo }}>
          <Text style={{ ...styles.ProductName }}>{productDetails.name}</Text>

          <Text style={{ ...styles.ProductPrice }}>
            <IconMaterial
              name="attach-money"
              color={COLORS.brightRed}
              size={PROPERTIVE.h1}
            />
            {productDetails.price}
          </Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={{ ...styles.ProductDescription }}>
              {productDetails.description + productDetails.shortDescription}
            </Text>
          </ScrollView>
        </View>
        <View style={{ ...styles.ProductRelated }}>
          <Text style={{ ...appStyle.TitleSection }}>Related</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ ...FLATLISTRESET.Grow }}
            data={productDetails.relatedProducts}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <TouchableHighlight
                underlayColor={COLORS.darkGray}
                onPress={() => navigation.push('Details', { product: item })}
                style={{ ...styles.ProductRelatedItem }}>
                <>
                  <Image
                    style={{ ...styles.ProductRelatedImage }}
                    source={{ uri: item.image }}
                  />
                  <Text style={{ fontWeight: PROPERTIVE.semiBold }}>
                    {item.name}
                  </Text>
                </>
              </TouchableHighlight>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Header: {
    flex: 1,
  },
  HeaderContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  HeaderButton: {
    width: 50,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.darkGray,
    borderWidth: 1,
    borderRadius: PROPERTIVE.radius15,
  },
  ProductOverView: {
    flex: 4,
  },
  ProductImage: {
    width: '80%',
    aspectRatio: 3 / 2,
    alignSelf: 'center',
  },
  ProductSizeContent: {
    ...FLATLISTRESET.Grow,
    width: '75%',
    alignSelf: 'center',
  },
  ProductSize: {
    marginRight: PROPERTIVE.space2,
    paddingVertical: PROPERTIVE.space1,
    paddingHorizontal: PROPERTIVE.space3,
    borderColor: COLORS.brightRed,
    borderWidth: 1,
    borderRadius: PROPERTIVE.radius10,
  },
  BuyButton: {
    alignSelf: 'flex-end',
    height: 50,
    aspectRatio: 2 / 1,
    backgroundColor: COLORS.brightRed,
    borderRadius: PROPERTIVE.radius10,
  },
  BuyButtonContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  BuyButtonTxt: {
    color: COLORS.white,
    fontSize: PROPERTIVE.h2,
  },
  ProductInfo: {
    flex: 2,
  },
  ProductName: {
    fontSize: PROPERTIVE.h1 * 1.3,
    fontWeight: PROPERTIVE.bold,
  },
  ProductPrice: {
    fontSize: PROPERTIVE.h1 * 1.5,
  },
  ProductDescription: {
    fontSize: PROPERTIVE.h3,
    fontWeight: PROPERTIVE.medium,
    opacity: 0.5,
  },
  ProductRelated: {
    flex: 2,
  },
  ProductRelatedItem: {
    width: 140,
    aspectRatio: 1,
    justifyContent: 'space-evenly',
    backgroundColor: COLORS.lightGray,
    marginRight: PROPERTIVE.space3,
    paddingHorizontal: PROPERTIVE.space2,
    borderRadius: PROPERTIVE.radius10,
  },
  ProductRelatedImage: {
    width: 100,
    aspectRatio: 2 / 1.2,
  },
});

export default DetailsNoAnimated;
