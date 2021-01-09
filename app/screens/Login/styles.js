import { StyleSheet } from 'react-native';
import { COLORS, PROPERTIVE } from '../../config/styles';

export default StyleSheet.create({
  headerTitle: {
    textAlign: 'center',
    fontSize: PROPERTIVE.h2 * 2,
    fontWeight: PROPERTIVE.semiBold,
    marginBottom: PROPERTIVE.space2,
  },
  rememberContent: {
    alignItems: 'flex-start',
    marginBottom: PROPERTIVE.space2,
  },
  signinContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSignin: {
    borderRadius: 40,
    marginBottom: PROPERTIVE.space2,
  },
  buttonGoback: {
    borderRadius: 40,
    borderColor: COLORS.brightRed,
    borderWidth: 1,
  },
  textSignin: {
    color: COLORS.white,
    fontWeight: PROPERTIVE.semiBold,
    fontSize: PROPERTIVE.h3,
  },
  // FOOTER
  buttonFB: {
    borderRadius: PROPERTIVE.radius10,
  },
  buttonFBContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    paddingLeft: 20,
    fontSize: PROPERTIVE.h2,
    fontFamily: 'Gill Sans',
    color: COLORS.white,
  },
  navigateContent: {
    flexDirection: 'row',
  },
  textRight: {
    color: COLORS.white,
    fontWeight: PROPERTIVE.semiBold,
    paddingRight: PROPERTIVE.space1 - 5,
  },
  textLink: {
    color: COLORS.darkBlue,
    fontWeight: PROPERTIVE.semiBold,
  },
});
