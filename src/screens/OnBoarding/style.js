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
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  sliderCont: {
    width: '80%',
    height: '100%',
    // backgroundColor: 'red',
  },
  slide: {
    width: '95%',
    height: '90%',
    // backgroundColor: 'pink',
    alignItems: 'center',
  },
  dots: {
    backgroundColor: Color.WHITE,
  },
  activeDots: {
    backgroundColor: '#00ADEF',
    borderColor: Color.WHITE,
    borderWidth: width * 0.002,
  },
  text1: {
    fontFamily: 'Roboto-Regular',
    fontSize: height * 0.018,
    color: '#464D53',
    textAlign: 'center',
    position: 'absolute',
    top: height * 0.25,
  },
  imageContainer: {
    width: '50%',
    height: '50%',
    // backgroundColor: 'green',
    position: 'absolute',
    bottom: 0,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  dontButtonCont: {},
});
