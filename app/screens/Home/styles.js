import { StyleSheet } from 'react-native';
import { COLORS, PROPERTIVE } from '../../config/styles';

export default StyleSheet.create({
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
