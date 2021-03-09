import {StyleSheet, Dimensions} from 'react-native';

// local import
import {Color} from '../../utils/colors';

//dimenstion
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
    alignItems: 'center',
  },
  imgCont: {
    width: '80%',
    height: '30%',
    marginVertical: height * 0.055,
    // backgroundColor: 'red',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  chooseLangTxt: {
    fontFamily: 'Roboto-Regular',
    color: Color.TXT_PRIMARY,
    fontSize: height * 0.025,
  },
  langCont: {
    width: '78%',
    height: '30%',
    marginTop: height * 0.025,
    // backgroundColor: 'red',
    borderWidth: 0.8,
    borderColor: '#F4F4F4',
    elevation: 0.85,
  },
  singleLangCont: {
    width: '100%',
    height: '25%',
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: width * 0.05,
    paddingRight: width * 0.025,
    borderWidth: 0.8,
    borderColor: '#F4F4F4',
  },
  singleLangTxt: {
    fontFamily: 'Roboto-Regular',
    color: Color.TXT_PRIMARY,
    fontSize: height * 0.02,
  },
  checkedCheckCont: {
    width: '15%',
    height: '80%',
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkIcon: {
    width: '50%',
    height: '50%',
  },
  buttonCont: {
    width: '80%',
    marginTop: height * 0.07,
    // backgroundColor: 'red',
  },
});
