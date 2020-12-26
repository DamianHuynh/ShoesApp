import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import { API } from '../../config';
import {
  appStyle,
  COLORS,
  FLATLISTRESET,
  PROPERTIVE,
} from '../../config/styles';
import { SharedElement } from 'react-navigation-shared-element';

export default function HomeScreens({ navigation }) {
  const [category, setCategory] = useState([]);
  const [idCategory, setIdCategory] = useState('ADIDAS');
  const [product, setProduct] = useState([]);
  const [bestSell, setBestSell] = useState([]);

  useEffect(() => {
    Axios({ method: 'GET', url: `${API}getAllCategory` })
      .then(({ data: { content } }) => {
        setCategory(content);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    Axios({
      method: 'GET',
      url: `${API}getProductByCategory?categoryId=${idCategory}`,
    })
      .then(({ data: { content } }) => {
        setProduct(content);
      })
      .catch((err) => console.log(err));
  }, [idCategory]);

  useEffect(() => {
    Axios({
      method: 'GET',
      url: `${API}getProductByFeature?feature=true`,
    })
      .then(({ data: { content } }) => {
        setBestSell(content);
      })
      .catch((err) => console.log(err));
  }, []);

  const getIdCategory = (id) => {
    setIdCategory(id);
  };

  return (
    <SafeAreaView style={{ ...appStyle.WrapScreen }}>
      <View style={{ ...appStyle.WrapContent }}>
        <View style={styles.Header}>
          <View style={{ ...styles.HeaderContent }}>
            <TouchableHighlight
              style={{
                ...styles.HeaderButton,
                transform: [{ rotate: '90deg' }],
              }}>
              <IconFeather name="bar-chart-2" size={24} />
            </TouchableHighlight>
            <TouchableHighlight style={{ ...styles.HeaderButton }}>
              <Text>ĐH</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.ProductList}>
          <Text style={{ ...appStyle.TitleSection }}>Brand</Text>
          <FlatList
            style={{ ...FLATLISTRESET.Grow }}
            bounces={false}
            contentContainerStyle={{ ...styles.FlatListContent }}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={category}
            renderItem={({ item }) => {
              if (item.categoryParent.length > 2) {
                return (
                  <TouchableOpacity
                    style={{ ...styles.ProductCategory }}
                    disabled={item.id === idCategory}
                    onPress={() => getIdCategory(item.id)}>
                    <Text
                      style={
                        item.id === idCategory
                          ? {
                              ...styles.ProductCateID,
                              opacity: PROPERTIVE.active,
                            }
                          : {
                              ...styles.ProductCateID,
                            }
                      }>
                      {item.category}
                    </Text>
                  </TouchableOpacity>
                );
              }
            }}
          />
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ ...FLATLISTRESET.Grow, paddingLeft: PROPERTIVE.space1 }}
            data={product}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <View>
                <View style={{ ...styles.CardBackground }} />
                <TouchableOpacity
                  style={{ ...styles.ImageProduct }}
                  onPress={() => navigation.push('Details', { product: item })}>
                  <SharedElement
                    id={`id.${item.alias}.photo`}
                    style={{ ...StyleSheet.absoluteFillObject }}>
                    <Image
                      source={{ uri: item.image }}
                      style={{ ...StyleSheet.absoluteFillObject }}
                    />
                  </SharedElement>
                </TouchableOpacity>
                <View style={{ ...styles.ProductInfor }}>
                  <Text style={{ ...styles.ProductName }}>{item.name}</Text>
                  <View style={{ ...styles.ProductPriceContent }}>
                    <Text style={{ fontSize: PROPERTIVE.h3 }}>
                      <IconMaterial
                        name="attach-money"
                        color={COLORS.brightRed}
                        size={PROPERTIVE.h4}
                      />
                      {item.price}
                    </Text>
                    <TouchableOpacity
                      style={{ ...styles.ProductFavor }}
                      onPress={() => console.log('favor')}>
                      <IconAntDesign name="heart" size={15} color="#fff" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
        <View style={styles.BestSeller}>
          <Text style={{ ...appStyle.TitleSection }}>Best Selling</Text>
          <FlatList
            data={bestSell}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <View style={{ ...styles.BestSellerItem }}>
                <View style={{ ...styles.SellBackground }}>
                  <Image
                    source={{ uri: item.image }}
                    style={{ ...styles.BestSellerImage }}
                  />
                </View>
                <View style={{ ...styles.BestSellerInfo }}>
                  <Text style={{ fontWeight: PROPERTIVE.semiBold }}>
                    {item.name}
                  </Text>
                  <View style={{ ...styles.BestSellerPrice }}>
                    <Text style={{ fontSize: PROPERTIVE.h1 }}>
                      <IconMaterial
                        name="attach-money"
                        color={COLORS.brightRed}
                        size={PROPERTIVE.h2}
                      />
                      {item.price}
                    </Text>
                    <TouchableOpacity
                      style={{ ...styles.BestSellerButton }}
                      onPress={() =>
                        navigation.push('DetailsNoAnimated', { product: item })
                      }>
                      <IconAntDesign name="right" size={24} color="#fff" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Contaier: {
    flex: 1,
    paddingHorizontal: PROPERTIVE.space2,
    backgroundColor: COLORS.white,
  },
  FlatListContent: {
    justifyContent: 'center',
  },
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
  ProductList: {
    flex: 4,
  },
  ProductCateID: {
    fontSize: PROPERTIVE.h2,
    fontWeight: PROPERTIVE.semiBold,
    opacity: PROPERTIVE.inactive,
  },
  ProductCategory: {
    padding: PROPERTIVE.space1,
    marginRight: PROPERTIVE.space1,
  },
  CardBackground: {
    backgroundColor: COLORS.lightGray,
    width: PROPERTIVE.size135,
    height: PROPERTIVE.size150,
    borderRadius: PROPERTIVE.radius15,
    marginRight: PROPERTIVE.space4,
  },
  ImageProduct: {
    width: PROPERTIVE.size170,
    aspectRatio: 1,
    position: 'absolute',
    top: 0,
    left: -20,
    transform: [{ rotate: '-10deg' }],
  },
  ProductInfor: {
    paddingHorizontal: PROPERTIVE.space1,
    marginTop: PROPERTIVE.space1,
    width: PROPERTIVE.size140,
    height: PROPERTIVE.size80,
    justifyContent: 'space-between',
  },
  ProductName: {
    fontWeight: PROPERTIVE.semiBold,
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
    backgroundColor: COLORS.brightRed,
  },
  BestSeller: {
    flex: 4,
  },
  BestSellerItem: {
    flexDirection: 'row',
    height: 100,
    marginBottom: PROPERTIVE.space3,
  },
  SellBackground: {
    backgroundColor: COLORS.lightGray,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: PROPERTIVE.radius15,
  },
  BestSellerImage: {
    width: 80,
    aspectRatio: 1,
  },
  BestSellerInfo: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: PROPERTIVE.space2,
    paddingVertical: PROPERTIVE.space1,
  },
  BestSellerPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  BestSellerButton: {
    width: 35,
    height: 35,
    borderRadius: PROPERTIVE.radius10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.brightRed,
  },
});
