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
  ////** Slider start */
  sliderCont: {
    width: width,
    height: height * 0.4,
    backgroundColor: 'red',
  },

  sliderImgBg: {
    width: '100%',
    height: '100%',
  },
  activeDots: {
    width: width * 0.025,
    height: width * 0.025,
    borderRadius: width / 2,
    backgroundColor: '#00ADEF',
    borderWidth: width * 0.004,
    borderColor: Color.WHITE,
  },
  dots: {
    width: width * 0.025,
    height: width * 0.025,
    borderRadius: width / 2,
    backgroundColor: '#464D53',
    borderWidth: width * 0.004,
    borderColor: Color.WHITE,
  },
  //******* categories */
  categories: {
    width: width * 0.98,
    height: height * 0.5,
    backgroundColor: Color.WHITE,
    alignSelf: 'center',
    marginTop: height * 0.015,
  },
  textCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.035,
    marginTop: height * 0.015,
    marginBottom: height * 0.04,
  },
  CategoriesTxt: {
    fontFamily: 'Roboto-Regular',
    fontSize: height * 0.02,
    color: Color.BUTTON_TXT,
  },
  showMoreTxt: {
    fontFamily: 'Roboto-Regular',
    color: Color.CYAN,
  },
  categoriesRowCont: {
    width: '88%',
    height: '20%',
    marginBottom: height * 0.04,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  singleCategoryCont: {
    width: '30%',
    height: '100%',
    // backgroundColor: 'green',
    alignItems: 'center',
  },
  cateImgCont: {
    width: '100%',
    height: '70%',
    // backgroundColor: 'pink',
    marginBottom: height * 0.005,
  },
  cateImg: {
    width: '100%',
    height: '100%',
  },
  singleCategoryTxt: {
    fontFamily: 'Roboto-Regular',
    color: '#989FA7',
    fontSize: height * 0.018,
  },

  //**** popularKeywordCont */
  popularKeywordCont: {
    width: width * 0.98,
    height: height * 0.3,
    backgroundColor: Color.WHITE,
    alignSelf: 'center',
    marginTop: height * 0.015,
  },
  popularHeadingTxt: {
    fontFamily: 'Roboto-Regular',
    fontSize: height * 0.025,
    color: Color.BUTTON_TXT,
    marginLeft: width * 0.035,
    marginTop: height * 0.015,
  },
  popularItemCont: {
    width: '90%',
    height: '35%',
    marginLeft: width * 0.035,
    marginVertical: height * 0.01,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  popularSingleItemCont: {
    width: '48%',
    height: '100%',
    flexDirection: 'row',
    backgroundColor: Color.PRIMARY_BG,
    // backgroundColor: 'pink',
  },
  popularImgCont: {
    width: '50%',
    height: '100%',
    // backgroundColor: 'orange',
  },
  popularImg: {
    width: '100%',
    height: '100%',
  },
  popularTxtCont: {
    width: '50%',
    height: '100%',
    // backgroundColor: 'blue',
    justifyContent: 'center',
    paddingLeft: width * 0.015,
  },
  popularItemTxt1: {
    fontFamily: 'Roboto-Regular',
    fontSize: height * 0.025,
    color: Color.TXT_PRIMARY,
  },
  popularItemTxt2: {
    fontFamily: 'Roboto-Regular',
    fontSize: height * 0.018,
    color: '#7E8287',
  },
});
