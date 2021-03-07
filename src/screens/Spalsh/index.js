import React, {useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ImageBackground,
  StatusBar,
} from 'react-native';

//local import
import styles from './style';
import {images} from '../../utils/assets';

const index = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Welcome');
    }, 800);
  });
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <ImageBackground source={images.authBackground} style={styles.bgImgCont}>
        <View style={styles.imgTxtCont}>
          <View style={styles.mainLogoCont}>
            <Image
              source={images.mainLogo}
              resizeMode="contain"
              style={styles.mainLogo}
            />
          </View>

          <Text style={styles.txt1}>WELCOME TO</Text>
          <Text style={styles.txt2}>E-Commerce App</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default index;
