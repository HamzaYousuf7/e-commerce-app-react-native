import {StyleSheet, Dimensions} from 'react-native';

// local
import {Color} from '../../utils/colors';

// dimenstion
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.PRIMARY_BG,
  },
  secondCont: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'green',
    justifyContent: 'space-between',
  },
  cartItemCont: {
    width: '95%',
    height: '63%',
    alignSelf: 'center',
    marginTop: height * 0.02,
    // backgroundColor: 'red',
    // marginBottom: height * 0.015,
  },
  checkoutCont: {
    width: '95%',
    height: '28%',
    alignSelf: 'center',
    alignItems: 'center',
    paddingTop: height * 0.025,
    borderRadius: width * 0.1,
    
    backgroundColor: Color.WHITE,
  },
  txt1: {
    color: '#464D53',
    fontFamily: 'Roboto-Regular',
    fontSize: height * 0.02,
  },
  txt2Price: {
    color: '#464D53',
    fontFamily: 'Roboto-Medium',
    fontSize: height * 0.03,
    fontWeight: 'bold',
  },
  buttonCont: {
    width: '80%',
  },
});
