import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const COLORS = {
  brightRed: '#ee582d',
  lightGray: '#edecee',
  darkGray: '#a3a2a6',
  white: '#ffffff',
  vividRed: '#F82905',
  darkBlue: '#0459a3',
  strongCyan: '#2CB9B0',
};

export const PROPERTIVE = {
  active: 1,
  inactive: 0.2,

  // font sizes
  h1: 20,
  h2: 18,
  h3: 15,
  h4: 12,

  //font weight
  normal: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',

  // border radius
  radius10: 10,
  radius15: 15,

  // space
  space1: 10,
  space2: 20,
  space3: 30,
  space4: 40,

  // size
  height,
  width,
  size20: 20,
  size80: 80,
  size135: 135,
  size140: 140,
  size150: 150,
  size170: 170,
};

export const FLATLISTRESET = {
  Grow: {
    flexGrow: 0,
  },
};

export const appStyle = {
  WrapScreen: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  WrapContent: {
    flex: 1,
    paddingHorizontal: PROPERTIVE.space2,
    backgroundColor: 'transparent',
  },
  TitleSection: {
    fontSize: PROPERTIVE.h1,
    fontWeight: PROPERTIVE.semiBold,
    marginBottom: PROPERTIVE.space1,
  },
};
