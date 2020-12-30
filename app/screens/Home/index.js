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
} from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import IconFeather from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

import { API, DEFAULT_ID_CATEGORY } from '../../config';

import * as Themes from '../../config/styles';
import styles from './styles';
import { SCREEN } from '../../navigation/Constant';
import Container from '../../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../redux/thunks/ProductThunks';
import { getIdCategory } from '../../redux/actions/ProductActions';

export default function HomeScreens({ navigation }) {
  // const [category, setCategory] = useState([]);
  const [idCategory, setIdCategory] = useState(DEFAULT_ID_CATEGORY);
  const [product, setProduct] = useState([]);
  const [bestSell, setBestSell] = useState([]);

  const dispatch = useDispatch();
  const { allCategory: category } = useSelector(
    (state) => state.ProductReducer,
  );

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

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

  const CategoryID = ({ categoryItem }) => {
    return (
      categoryItem.categoryParent.length > 2 && (
        <TouchableOpacity
          style={{ ...styles.ProductCategory }}
          disabled={categoryItem.id === idCategory}
          onPress={() => setIdCategory(categoryItem.id)}>
          <Text
            style={
              categoryItem.id === idCategory
                ? {
                    ...styles.ProductCateID,
                    opacity: Themes.PROPERTIVE.active,
                  }
                : {
                    ...styles.ProductCateID,
                  }
            }>
            {categoryItem.category}
          </Text>
        </TouchableOpacity>
      )
    );
  };

  const ProductItem = ({ productItem }) => {
    return (
      <View>
        <View style={{ ...styles.CardBackground }} />
        <TouchableOpacity
          style={{ ...styles.ImageProduct }}
          onPress={() =>
            navigation.push(SCREEN.DETAIL, { product: productItem })
          }>
          <SharedElement
            id={`id.${productItem.alias}.photo`}
            style={{ ...StyleSheet.absoluteFillObject }}>
            <Image
              source={{ uri: productItem.image }}
              style={{ ...StyleSheet.absoluteFillObject }}
            />
          </SharedElement>
        </TouchableOpacity>
        <View style={{ ...styles.ProductInfor }}>
          <Text style={{ ...styles.ProductName }}>{productItem.name}</Text>
          <View style={{ ...styles.ProductPriceContent }}>
            <Text style={{ fontSize: Themes.PROPERTIVE.h3 }}>
              <IconMaterial
                name="attach-money"
                color={Themes.COLORS.brightRed}
                size={Themes.PROPERTIVE.h4}
              />
              {productItem.price}
            </Text>
            <TouchableOpacity
              style={{ ...styles.ProductFavor }}
              onPress={() => console.log('favor')}>
              <IconAntDesign name="heart" size={15} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <Container>
      <View style={{ ...styles.Header }}>
        <View style={{ ...styles.HeaderContent }}>
          <TouchableHighlight
            underlayColor={Themes.COLORS.darkGray}
            onPress={() => navigation.openDrawer()}
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
        <Text style={{ ...Themes.appStyle.TitleSection }}>Product</Text>
        <FlatList
          style={{ ...Themes.FLATLISTRESET.Grow }}
          bounces={false}
          contentContainerStyle={{ ...styles.FlatListContent }}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={category}
          renderItem={({ item }) => <CategoryID categoryItem={item} />}
        />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            ...Themes.FLATLISTRESET.Grow,
            paddingLeft: Themes.PROPERTIVE.space1,
          }}
          data={product}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => <ProductItem productItem={item} />}
        />
      </View>
      <View style={styles.BestSeller}>
        <Text style={{ ...Themes.appStyle.TitleSection }}>Best Selling</Text>
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
                <Text style={{ fontWeight: Themes.PROPERTIVE.semiBold }}>
                  {item.name}
                </Text>
                <View style={{ ...styles.BestSellerPrice }}>
                  <Text style={{ fontSize: Themes.PROPERTIVE.h1 }}>
                    <IconMaterial
                      name="attach-money"
                      color={Themes.COLORS.brightRed}
                      size={Themes.PROPERTIVE.h2}
                    />
                    {item.price}
                  </Text>
                  <TouchableOpacity
                    style={{ ...styles.BestSellerButton }}
                    onPress={() =>
                      navigation.push(SCREEN.DETAIL_NO_ANIMATION, {
                        product: item,
                      })
                    }>
                    <IconAntDesign name="right" size={24} color="#fff" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </Container>
  );
}
