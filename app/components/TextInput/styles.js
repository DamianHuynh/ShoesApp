import { StyleSheet } from 'react-native';
import { COLORS, PROPERTIVE } from '../../config/styles';

export default StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    height: PROPERTIVE.size80 - 30,
    borderRadius: PROPERTIVE.radius10,
    padding: PROPERTIVE.space1,
  },
  iconContainer: {
    marginRight: PROPERTIVE.space1,
  },
  inputField: {
    flex: 1,
    fontSize: PROPERTIVE.h3,
  },
  validContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: PROPERTIVE.size80 - 60,
    width: PROPERTIVE.size80 - 60,
    borderRadius: PROPERTIVE.radius10,
  },
  errorsContent: {
    marginTop: PROPERTIVE.space1 - 5,
  },
  textErrors: {
    color: COLORS.vividRed,
  },
});
