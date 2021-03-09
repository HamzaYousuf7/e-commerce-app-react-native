import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StatusBar,
  ImageBackground,
} from 'react-native';

//local import
import Button from '../../components/Button';
import {images} from '../../utils/assets';
import styles from './style';

const index = (props) => {
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

        <View style={styles.buttonCont}>
          <Button
            isWhiteTxt
            title=" LOG IN"
            handlePress={() =>
              props.navigation.navigate('SingUpIn', {isLogin: true})
            }
          />
          <Button
            isWhiteBG
            title=" SIGN UP"
            handlePress={() =>
              props.navigation.navigate('SingUpIn', {isLogin: false})
            }
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default index;
