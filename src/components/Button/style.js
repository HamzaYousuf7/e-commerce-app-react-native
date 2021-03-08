import {StyleSheet, Dimensions} from 'react-native';

// local import
import {Color} from '../../utils/colors';

//dimenstion
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: '100%',
    height: height * 0.07,
    backgroundColor: Color.BLUE,
    borderRadius: width * 0.055,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: height * 0.01,
  },
  txt: {
    color: Color.WHITE,
    fontFamily: 'Roboto-Medium',
    fontSize: height * 0.018,
  },
});
