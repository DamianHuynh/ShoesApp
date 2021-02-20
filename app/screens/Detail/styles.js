import { StyleSheet } from 'react-native';
import { COLORS, FLATLISTRESET, PROPERTIVE } from '../../config/styles';

export default StyleSheet.create({
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
    borderColor: '#ffffff80',
    borderWidth: 1,
    borderRadius: PROPERTIVE.radius10,
  },
  BuyButton: {
    alignSelf: 'flex-end',
    height: 50,
    aspectRatio: 2 / 1,
    borderRadius: PROPERTIVE.radius10,
  },
  BuyButtonContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderColor: '#ffffff80',
    borderWidth: 1,
    borderRadius: PROPERTIVE.radius10,
  },
  BuyButtonTxt: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  ProductInfo: {
    flex: 2,
  },
  ProductName: {
    fontSize: 24,
    fontFamily: 'Poppins-Regular',
    flexBasis: '70%',
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
    // aspectRatio: 1,
    // marginRight: PROPERTIVE.space3,
    // paddingHorizontal: PROPERTIVE.space2,
    borderRadius: PROPERTIVE.radius10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ProductRelatedImage: {
    width: '100%',
    height: 100,
  },
  ProductRelatedName: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
});
