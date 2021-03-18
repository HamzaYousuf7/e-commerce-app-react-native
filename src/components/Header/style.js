import {StyleSheet, Dimensions} from 'react-native';

// local import
import {Color} from '../../utils/colors';

//dimenstion
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  simpleHeaderCont: {
    width: '100%',
    height: height * 0.07,
    backgroundColor: Color.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIconCont: {
    width: '10%',
    height: '100%',
    marginLeft: width * 0.025,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  leftIcon: {
    width: '70%',
    height: '70%',
  },
  titleTxt: {
    marginLeft: width * 0.025,
    fontFamily: 'Roboto-Bold',
    fontSize: height * 0.035,
    color: '#62686D',
  },
});
