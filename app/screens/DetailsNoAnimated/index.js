import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableHighlight,
  FlatList,
  ScrollView,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

import { API } from '../../config';
import * as Themes from '../../config/styles';
import styles from './styles';
import { SCREEN } from '../../navigation/Constant';

function DetailsNoAnimated({ navigation, route }) {
  const { product } = route.params;
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    axios({ method: 'GET', url: `${API}getbyid?id=${product.id}` })
      .then(({ data: { content } }) => setProductDetails(content))
      .catch((err) => console.log(err));
  }, [product.id]);

  return (
    <SafeAreaView style={{ ...Themes.appStyle.WrapScreen }}>
      <View style={{ ...Themes.appStyle.WrapContent }}>
        <View style={styles.Header}>
          <View style={{ ...styles.HeaderContent }}>
            <TouchableHighlight
              underlayColor={Themes.COLORS.lightGray}
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

          <Text style={{ ...Themes.appStyle.TitleSection }}>Size</Text>
          <FlatList
            style={{ ...styles.ProductSizeContent }}
            bounces={false}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={productDetails.size}
            keyExtractor={(item) => item}
            contentContainerStyle={{ marginVertical: Themes.PROPERTIVE.space1 }}
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
                  color={Themes.COLORS.white}
                  size={Themes.PROPERTIVE.h2}
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
              color={Themes.COLORS.brightRed}
              size={Themes.PROPERTIVE.h1}
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
          <Text style={{ ...Themes.appStyle.TitleSection }}>Related</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ ...Themes.FLATLISTRESET.Grow }}
            data={productDetails.relatedProducts}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <TouchableHighlight
                underlayColor={Themes.COLORS.darkGray}
                onPress={() =>
                  navigation.push(SCREEN.DETAIL_NO_ANIMATION, { product: item })
                }
                style={{ ...styles.ProductRelatedItem }}>
                <>
                  <Image
                    style={{ ...styles.ProductRelatedImage }}
                    source={{ uri: item.image }}
                  />
                  <Text style={{ fontWeight: Themes.PROPERTIVE.semiBold }}>
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

export default DetailsNoAnimated;
