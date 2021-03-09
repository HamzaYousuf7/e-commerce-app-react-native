import React from 'react';
import {
  SafeAreaView,
  ImageBackground,
  Text,
  Image,
  View,
  StatusBar,
} from 'react-native';

// third party
import AppIntroSlider from 'react-native-app-intro-slider';

//local import
import {images} from '../../utils/assets';
import Button from '../../components/Button';
import styles from './style';

const index = (props) => {
  // slider array
  const slides = [
    {
      key: 1,
      text:
        'Life is a succession of lessons which must be lived to be understood.',
      image: images.onBoarding1,
    },
    {
      key: 2,

      text:
        'You come into the world with nothing, and the purpose of your life is to make something out of nothing.',
      image: images.onBoarding2,
    },
    {
      key: 3,

      text: ' Life is what happens while you are busy making other plans.',
      image: images.onBoarding3,
    },
  ];

  const _renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.text1}>{item.text} </Text>

        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={item.image}
          />
        </View>
      </View>
    );
  };

  const _renderNextButton = () => {
    return <></>;
  };

  const _renderDoneButton = () => {
    return (
      <View style={styles.dontButtonCont}>
        <Button
           isWhiteBG
          title=" Go To Home"
          handlePress={() => props.navigation.navigate('Selectlanguage')}
        />
      </View>
    );
  };
  return (
    <>
      <StatusBar backgroundColor="#00ADEF" barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={images.onBoardingBackGround}
          style={styles.bgImgCont}>
          <View style={styles.sliderCont}>
            <AppIntroSlider
              data={slides}
              renderNextButton={_renderNextButton}
              renderDoneButton={_renderNextButton}
              renderDoneButton={_renderDoneButton}
              renderItem={_renderItem}
              dotStyle={styles.dots}
              activeDotStyle={styles.activeDots}
              bottomButton
            />
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

export default index;
