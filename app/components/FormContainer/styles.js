import { StyleSheet } from 'react-native';
import { COLORS } from '../../config/styles';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerBackground: {
    flex: 1,
    borderBottomLeftRadius: 75,
  },
  content: {
    flex: 3,
  },
  innerContent: {
    flex: 1,
    borderTopLeftRadius: 0,
    borderRadius: 75,
    backgroundColor: COLORS.white,
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
