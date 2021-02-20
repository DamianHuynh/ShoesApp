import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  Animated,
  FlatList,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import { SharedElement } from 'react-navigation-shared-element';
import { productServices } from '../../services/ProductServices';
import * as Themes from '../../config/styles';
import { SCREEN } from '../../navigation/Constant';
import Container from '../../components/Container';
import styles from './styles';
import { BackgroundView, GlassView } from '../../components';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Detail({ navigation, route }) {
  const { product } = route.params;
  const [productDetails, setProductDetails] = useState({});
  const mountedAnimated = useRef(new Animated.Value(0)).current;

  const translateY = mountedAnimated.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 0],
  });

  const animation = useCallback(
    (toValue, delay) =>
      Animated.timing(mountedAnimated, {
        toValue,
        duration: 500,
        delay,
        useNativeDriver: true,
      }),
    [mountedAnimated],
  );

  useEffect(() => {
    Animated.parallel([animation(1, 500)]).start();
  }, [animation]);

  useEffect(() => {
    productServices
      .getListProductById(product.id)
      .then(({ data: { content } }) => setProductDetails(content))
      .catch((err) => console.log(err));
  }, [product.id]);

  console.log(`id.${product.alias}.photo`);

  return (
    <BackgroundView>
      <SafeAreaView style={[{ flex: 1, magrinHorizontal: 20 }]}>
        <View style={styles.Header}>
          <View style={{ ...styles.HeaderContent }}>
            <TouchableHighlight
              onPress={() => {
                animation(0).start(() => navigation.goBack());
              }}
              underlayColor={Themes.COLORS.lightGray}>
              <GlassView style={{ ...styles.HeaderButton }}>
                <IconAntDesign name="left" size={20} />
              </GlassView>
            </TouchableHighlight>
            <TouchableHighlight>
              <GlassView style={{ ...styles.HeaderButton }}>
                <IconAntDesign name="hearto" size={20} />
              </GlassView>
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
            <Text style={{ ...Themes.appStyle.TitleSection }}>Size</Text>
            <FlatList
              style={{ ...styles.ProductSizeContent }}
              bounces={false}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={productDetails.size}
              keyExtractor={(item) => item}
              contentContainerStyle={{
                marginVertical: Themes.PROPERTIVE.space1,
              }}
              renderItem={({ item }) => (
                <GlassView transparent style={styles.ProductSize}>
                  <Text>{item}</Text>
                </GlassView>
              )}
            />

            <View>
              <TouchableHighlight style={{ ...styles.BuyButton }}>
                <GlassView transparent style={styles.BuyButtonContent}>
                  <Text style={{ ...styles.BuyButtonTxt }}>Buy</Text>
                  <IconAntDesign
                    name="shoppingcart"
                    color="#000"
                    size={Themes.PROPERTIVE.h2}
                  />
                </GlassView>
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
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItem: 'center',
              marginBottom: 20,
            }}>
            <Text style={{ ...styles.ProductName }}>{productDetails.name}</Text>
            <Text style={{ ...styles.ProductPrice }}>
              <IconMaterial
                name="attach-money"
                color={Themes.COLORS.brightRed}
                size={Themes.PROPERTIVE.h1}
              />
              {productDetails.price}
            </Text>
          </View>
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
          <Text style={{ ...Themes.appStyle.TitleSection }}>Related</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
            style={{ ...Themes.FLATLISTRESET.Grow }}
            data={productDetails.relatedProducts}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.push(SCREEN.DETAIL, { product: item })
                }>
                <GlassView style={{ ...styles.ProductRelatedItem }}>
                  <View>
                    <SharedElement id={`id.${item.alias}.photo`}>
                      <Image
                        style={{ ...styles.ProductRelatedImage }}
                        source={{ uri: item.image }}
                        resizeMode="contain"
                      />
                    </SharedElement>
                    <View style={{ flex: 1 }}>
                      <Text style={{ ...styles.ProductRelatedName }}>
                        {item.name}
                      </Text>
                    </View>
                  </View>
                </GlassView>
              </TouchableOpacity>
            )}
          />
        </Animated.View>
      </SafeAreaView>
    </BackgroundView>
  );
}

Detail.sharedElements = (route, otherRoute, showing) => {
  const { product } = route.params;
  return [`id.${product.alias}.photo`];
};

export default Detail;
