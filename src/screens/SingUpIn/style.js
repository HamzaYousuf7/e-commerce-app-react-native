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
    alignItems: 'flex-end',
  },
  seconCont: {
    width: width * 0.8,
    height: height * 0.65,
    // backgroundColor: 'red',
  },
  tabCont: {
    width: width * 0.55,
    height: height * 0.05,
    // backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: height * 0.08,
  },

  tabTxt: {
    fontFamily: 'Montserrat-Medium',
    color: Color.WHITE,
    fontSize: height * 0.03,
  },
  fbTxtCont: {
    width: '100%',
    height: '13%',
    backgroundColor: Color.BLUE,
    justifyContent: 'center',
    borderTopLeftRadius: height * 0.05,
    borderBottomLeftRadius: height * 0.05,
    paddingLeft: width * 0.055,
    marginTop: height * 0.05,
  },
  fbTxt: {
    fontFamily: 'Montserrat-Regular',
    color: Color.WHITE,
    fontSize: height * 0.021,
  },
});
