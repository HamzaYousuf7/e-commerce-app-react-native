import {StyleSheet, Dimensions} from 'react-native';

// local import
import {Color} from '../../utils/colors';

//dimenstion
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: '100%',
    height: height * 0.11,
    flexDirection: 'row',
    marginBottom: height * 0.015,
    backgroundColor: Color.WHITE,
  },
  imgCont: {
    width: '25%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  img: {
    width: '80%',
    height: '80%',
  },
  detailCont: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',

    // backgroundColor: 'pink',
  },

  titleTxt: {
    color: '#212121',
    fontFamily: 'Roboto-Regular',
    fontSize: height * 0.02,
  },
  sizeTxt: {
    color: '#7E8287',
    fontFamily: 'Roboto-Regular',
    // fontSize: height * 0.02,
  },
  priceTxt: {
    color: '#212121',
    fontFamily: 'Roboto-Regular',
    fontSize: height * 0.02,
    fontWeight: 'bold',
  },
  quantityCont: {
    width: '23%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  quantityTxt: {
    color: '#7E8287',
    fontFamily: 'Roboto-Regular',
    fontSize: height * 0.02,
  },
  plusIconCont: {
    width: '30%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'pink',
  },
  plusMinIcon: {
    width: '80%',
    height: '80%',
  },
});
