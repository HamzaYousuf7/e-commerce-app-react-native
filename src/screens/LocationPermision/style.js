import {StyleSheet, Dimensions} from 'react-native';

// local import
import {Color} from '../../utils/colors';

//dimenstion
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondCont: {
    width: '80%',
    height: '70%',
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  imgCont: {
    width: '100%',
    height: '40%',
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationPermisionimg: {
    width: '90%',
    height: '90%',
  },
  otherCont: {
    width: '100%',
    height: '40%',
    // backgroundColor: 'pink',
    alignItems: 'center',
  },
  mainHeadingTxt: {
    fontFamily: 'Roboto-Regular',
    color: '#464D53',
    fontSize: height * 0.02,
    marginTop: height * 0.025,
  },
  secondTxt: {
    marginTop: height * 0.015,
    fontFamily: 'Roboto-Regular',
    color: '#62686D',
    fontSize: height * 0.02,
    textAlign: 'center',
  },
  buttonCont: {
    width: '100%',
  },
});
