import {StyleSheet, Dimensions} from 'react-native';

// local import
import {Color} from '../../utils/colors';

//dimenstion
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  cartSize: {
    width: width * 0.45,
    height: height * 0.37,
    margin: height * 0.01,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    borderRadius:width *0.015
    // backgroundColor: 'red',
  },
  imgCont: {
    width: '100%',
    height: '67%',
    marginBottom: height * 0.005,
    // backgroundColor:'pink'
  },
  imageSize: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  main: {
    backgroundColor: '#F5F5F5',
    width: width * 1,
    height: height * 1,
  },
  viewSize: {
    width: width * 1,
    height: height * 0.2,
    backgroundColor: 'white',
    padding: 10,
  },
  content: {
    fontFamily: 'Roboto-Medium',
    fontSize: height * 0.0195,
    color: Color.TXT_PRIMARY,
  },
  fontColor: {
    color: '#00ADEF',
    fontWeight: 'bold',
    fontFamily: 'Roboto-Medium',
    fontSize: height * 0.016,
  },
  lineDecorator: {
    color: '#989FA7',
    fontFamily: 'Roboto-Thin',
    textDecorationLine: 'line-through',
  },
  discountPerTxt: {
    color: Color.BUTTON_TXT,
    fontFamily: 'Roboto-Regular',
  },
  changeDirection: {
    flexDirection: 'row',
  },
  iconSize: {
    width: 20,
    height: 20,
    textDecorationColor: '#00ADEF',
    tintColor: '#00ADEF',
  },
  styleStar: {
    alignItems: 'flex-start',
    paddingTop: 5,
  },
  styleStarContent: {
    flexDirection: 'row',
  },
  stylePadding: {
    paddingLeft: width *0.02
  },
  ratingTxt:{
    color: Color.BUTTON_TXT,
    fontFamily: 'Roboto-Regular',
  }
});
