import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableHighlight,
  Animated,
  FlatList,
  ScrollView,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import { SharedElement } from 'react-navigation-shared-element';
import {
  appStyle,
  COLORS,
  FLATLISTRESET,
  PROPERTIVE,
} from '../../config/styles';
import { API } from '../../config';

function Details({ navigation, route }) {
  const { product } = route.params;
  const [productDetails, setProductDetails] = useState({});
  const mountedAnimated = useRef(new Animated.Value(0)).current;

  const translateY = mountedAnimated.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 0],
  });

  const animation = (toValue, delay) =>
    Animated.timing(mountedAnimated, {
      toValue,
      duration: 500,
      delay,
      useNativeDriver: true,
    });

  useEffect(() => {
    Animated.parallel([animation(1, 500)]).start();
  });

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
              onPress={() => {
                animation(0).start(() => navigation.goBack());
              }}
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
          <SharedElement id={`id.${product.alias}.photo`}>
            <Image
              source={{ uri: product.image }}
              style={{ ...styles.ProductImage }}
            />
          </SharedElement>
          <Animated.View
            style={{ opacity: mountedAnimated, transform: [{ translateY }] }}>
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
          </Animated.View>
        </View>

        <Animated.View
          style={{
            ...styles.ProductInfo,
            opacity: mountedAnimated,
            transform: [{ translateY }],
          }}>
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
        </Animated.View>
        <Animated.View
          style={{
            ...styles.ProductRelated,
            opacity: mountedAnimated,
            transform: [{ translateY }],
          }}>
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
                <View>
                  <SharedElement id={`id.${item.alias}.photo`}>
                    <Image
                      style={{ ...styles.ProductRelatedImage }}
                      source={{ uri: item.image }}
                    />
                  </SharedElement>
                  <View>
                    <Text style={{ ...styles.ProductRelatedName }}>
                      {item.name}
                    </Text>
                  </View>
                </View>
              </TouchableHighlight>
            )}
          />
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}

Details.sharedElements = (route, otherRoute, showing) => {
  const { product } = route.params;
  return [`id.${product.alias}.photo`];
};

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
    backgroundColor: COLORS.lightGray,
    marginRight: PROPERTIVE.space3,
    paddingHorizontal: PROPERTIVE.space2,
    borderRadius: PROPERTIVE.radius10,
    justifyContent: 'center',
  },
  ProductRelatedImage: {
    width: 100,
    aspectRatio: 2 / 1.2,
  },
  ProductRelatedName: {
    marginTop: PROPERTIVE.space1,
    fontSize: PROPERTIVE.h4,
    fontWeight: PROPERTIVE.semiBold,
  },
});

export default Details;
