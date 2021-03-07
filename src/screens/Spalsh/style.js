import {StyleSheet, Dimensions} from 'react-native';

// local import
import {Color} from '../../utils/colors';

//dimenstion
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImgCont: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgTxtCont: {
    width: '80%',
    height: '35%',
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  mainLogoCont: {
    width: '75%',
    height: '75%',
    // backgroundColor: 'green',
    marginBottom: height * 0.015,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainLogo: {
    width: '80%',
    height: '80%',
  },
  txt1: {
    fontFamily: 'Montserrat-Light',
    color: Color.WHITE,
    fontSize: height * 0.02,
  },
  txt2: {
    fontFamily: 'Montserrat-Bold',
    color: Color.WHITE,
    fontSize: height * 0.03,
  },
});
