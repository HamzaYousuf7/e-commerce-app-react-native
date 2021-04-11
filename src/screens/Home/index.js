import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

// third party
import AppIntroSlider from 'react-native-app-intro-slider';
import {useDispatch} from 'react-redux';

// local redux imp
import {userRegister} from '../../store/actionCreator/userActionCreator';

//local import
import {images, icons} from '../../utils/assets';
import styles from './style';

const Index = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('[HOME INDEX CDM]');
    dispatch(userRegister());
  }, []);

  const slides = [
    {
      key: 1,
      image: images.carasolu,
    },
    {
      key: 2,
      image: images.carasolu,
    },
    {
      key: 3,
      image: images.carasolu,
    },
    {
      key: 4,
      image: images.carasolu,
    },
    {
      key: 5,
      image: images.carasolu,
    },
  ];

  const [cateArr1, setcateArr1] = useState([
    {id: 1, title: 'Books', icon: icons.bookH},
    {id: 2, title: 'Foods', icon: icons.foodH},
    {id: 3, title: 'Electronics', icon: icons.electronicsH},
  ]);

  const [cateArr2, setcateArr2] = useState([
    {id: 1, title: 'Computers', icon: icons.computerH},
    {id: 2, title: 'Cellphones', icon: icons.cellPhone},
    {id: 3, title: 'Offices', icon: icons.office},
  ]);

  const [cateArr3, setcateArr3] = useState([
    {id: 1, title: 'Shoes', icon: icons.shoesH},
    {id: 2, title: 'Fashions', icon: icons.fashionsH},
    {id: 3, title: 'Collections', icon: icons.collectionH},
  ]);

  const [popluarItemArr1, setpopluarItemArr1] = useState([
    {id: 1, img: images.popularOne, title: 'Heniken', txt: '155 Products'},
    {id: 2, img: images.populartwo, title: 'Macbook', txt: '1,000 Products'},
  ]);

  const [popluarItemArr2, setpopluarItemArr2] = useState([
    {id: 1, img: images.popularThree, title: 'Flycam', txt: '1,000 Products'},
    {id: 2, img: images.popularFour, title: 'iPhone', txt: '2,000 Products '},
  ]);

  const _renderItem = ({item}) => {
    return (
      <ImageBackground source={item.image} style={styles.sliderImgBg}>
        <View style={styles.searchHeaderCont}>
          <TouchableOpacity
            style={styles.drawerIconCont}
            activeOpacity={10}
            onPress={() => props.navigation.openDrawer()}>
            <Image
              source={icons.menu}
              resizeMode="contain"
              style={styles.searchBarImgs}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.searchBarCont} activeOpacity={10}>
            <Text style={styles.searchTxt}>Search...</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cartIconCont}
            activeOpacity={10}
            onPress={() => props.navigation.navigate('Cart')}>
            <View style={styles.noItemCont}>
              <Text style={styles.noItemTxt}>3</Text>
            </View>

            <Image
              source={icons.cart}
              resizeMode="contain"
              style={styles.searchBarImgs}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  };

  const CategoriesJSX = (singleCate) => {
    return (
      <TouchableOpacity
        style={styles.singleCategoryCont}
        key={singleCate.key}
        onPress={(singleCate) => {
          let check = singleCate.title == 'Shoes' ? 'true' : 'false';
          check ? props.navigation.navigate('OrderDetail') : null;
        }}>
        <View style={styles.cateImgCont}>
          <Image
            source={singleCate.icon}
            resizeMode="contain"
            style={styles.cateImg}
          />
        </View>
        <Text style={styles.singleCategoryTxt}>{singleCate.title}</Text>
      </TouchableOpacity>
    );
  };

  const PopularJSX = (item) => {
    return (
      <View style={styles.popularSingleItemCont}>
        <View style={styles.popularImgCont}>
          <Image
            source={item.img}
            resizeMode="contain"
            style={styles.popularImg}
          />
        </View>
        <View style={styles.popularTxtCont}>
          <Text style={styles.popularItemTxt1}>{item.title}</Text>
          <Text style={styles.popularItemTxt2}>{item.txt}</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.sliderCont}>
            <AppIntroSlider
              data={slides}
              renderItem={_renderItem}
              dotStyle={styles.dots}
              activeDotStyle={styles.activeDots}
              showNextButton={false}
              showDoneButton={false}
            />
          </View>

          {/** Categories cont */}
          <View style={styles.categories}>
            <View style={styles.textCont}>
              <Text style={styles.CategoriesTxt}>Categories</Text>
              <Text style={styles.showMoreTxt}>Show more</Text>
            </View>

            <View style={styles.categoriesRowCont}>
              {cateArr1.map((singleCate) => CategoriesJSX(singleCate))}
            </View>

            <View style={styles.categoriesRowCont}>
              {cateArr2.map((singleCate) => CategoriesJSX(singleCate))}
            </View>

            <View style={styles.categoriesRowCont}>
              {cateArr3.map((singleCate) => CategoriesJSX(singleCate))}
            </View>
          </View>

          {/** popular keyword cont */}
          <View style={styles.popularKeywordCont}>
            <Text style={styles.popularHeadingTxt}>Popular keywords</Text>

            <View style={styles.popularItemCont}>
              {popluarItemArr1.map((item) => PopularJSX(item))}
            </View>

            <View style={styles.popularItemCont}>
              {popluarItemArr2.map((item) => PopularJSX(item))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Index;
