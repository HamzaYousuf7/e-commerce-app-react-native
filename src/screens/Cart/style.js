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
    width: '100%',
    height: '60%',
    marginTop: height * 0.02,
    backgroundColor: 'red',
  },
  checkoutCont: {
    width: '100%',
    height: '30%',
    backgroundColor: 'pink',
  },
});
