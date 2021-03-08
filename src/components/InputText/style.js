import {StyleSheet, Dimensions} from 'react-native';

// local import
import {Color} from '../../utils/colors';

//dimenstion
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: '100%',
    height: height * 0.07,
    marginVertical: height * 0.01,
    backgroundColor: Color.INPUT,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: width * 0.05,
    overflow: 'hidden',
  },
  iconCont: {
    width: '20%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  icon: {
    width: '70%',
    height: '70%',
  },
  textInput: {
    width: '78%',
    height: '80%',
    color: Color.WHITE,
    // backgroundColor: 'pink',
  },
});
