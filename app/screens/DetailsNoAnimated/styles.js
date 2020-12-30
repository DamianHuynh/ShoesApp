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
