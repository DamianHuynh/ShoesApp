/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import * as Themes from '../../config/styles';
import IconFeather from 'react-native-vector-icons/Feather';
import { SCREEN } from '../../navigation/Constant';
import { useDispatch, useSelector } from 'react-redux';
import { DEFAULT_ID_CATEGORY } from '../../config';
import {
  getAllCategory,
  getProductByCategory,
  getProductBestSell,
} from '../../redux/thunks/ProductThunks';

import ProductItem from './ProductItem';

import { BackgroundView, GlassView } from '../../components';
import CategoryID from './CategoryID';
import BestSellItem from './BestSellItem';

function Cart({ navigation }) {
  const [idCategory, setIdCategory] = useState(DEFAULT_ID_CATEGORY);

  const dispatch = useDispatch();
  const {
    allCategory: category,
    productByCategory: product,
    bestSellProduct,
  } = useSelector((state) => state.ProductReducer);

  useEffect(() => {
    dispatch(getAllCategory());
    dispatch(getProductBestSell());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProductByCategory(idCategory));
  }, [dispatch, idCategory]);

  return (
    <BackgroundView>
      <View style={{ ...styles.Header }}>
        <View style={{ ...styles.HeaderContent }}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.openDrawer()}
            style={{ ...styles.HeaderButton }}>
            <GlassView style={styles.HeaderButton}>
              <IconFeather
                name="bar-chart-2"
                size={30}
                style={{ transform: [{ rotate: '90deg' }] }}
              />
            </GlassView>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.push(SCREEN.HOME)}
            activeOpacity={0.5}
            style={{ ...styles.HeaderButton }}>
            <GlassView style={styles.HeaderButton}>
              <Text>ĐH</Text>
            </GlassView>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.ProductList}>
        <Text style={styles.Title}>Product</Text>
        <FlatList
          horizontal
          data={category}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          style={{ ...Themes.FLATLISTRESET.Grow, marginBottom: 10 }}
          ItemSeparatorComponent={() => <View style={{ width: 40 }} />}
          renderItem={({ item }) => (
            <CategoryID
              categoryItem={item}
              onPress={setIdCategory}
              activeID={idCategory}
            />
          )}
        />
        <FlatList
          horizontal
          data={product}
          decelerationRate="fast"
          keyExtractor={(item) => item.name}
          showsHorizontalScrollIndicator={false}
          snapToInterval={Themes.PROPERTIVE.width * 0.8}
          contentContainerStyle={{ paddingHorizontal: 20 }}
          ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
          style={[Themes.FLATLISTRESET.Grow, { marginHorizontal: -20 }]}
          renderItem={({ item }) => <ProductItem productItem={item} />}
        />
      </View>
      <View style={styles.BestSell}>
        <GlassView transparent style={styles.BestSellContent}>
          <Text style={styles.Title}>Best Sell</Text>

          <FlatList
            data={bestSellProduct}
            keyExtractor={(item) => item.name}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
            renderItem={({ item }) => <BestSellItem bestSellItem={item} />}
          />
        </GlassView>
      </View>
    </BackgroundView>
  );
}

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Title: {
    fontSize: 24,
    fontFamily: 'Poppins-Regular',
    // paddingHorizontal: 20,
    marginBottom: 10,
  },
  Header: {
    flex: 1,
  },
  HeaderContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  HeaderButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 50,
    width: 50,
  },
  ProductList: {
    flex: 5,
    marginBottom: 10,
  },
  ProductCategory: {
    padding: 20,
    marginBottom: 10,
  },
  BestSell: {
    flex: 5,
  },
  BestSellContent: {
    flex: 1,
    marginHorizontal: -20,
    padding: 20,
    borderRadius: 30,
  },
});
