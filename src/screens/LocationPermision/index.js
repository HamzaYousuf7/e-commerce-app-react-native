import React from 'react';
import {SafeAreaView, View, Text, Image, StatusBar} from 'react-native';

//local import
import Button from '../../components/Button';
import {images, icons} from '../../utils/assets';
import styles from './style';

const index = (props) => {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.secondCont}>
          <View style={styles.imgCont}>
            <Image
              source={images.locationPermision}
              resizeMode="contain"
              style={styles.locationPermisionimg}
            />
          </View>

          <View style={styles.otherCont}>
            <Text style={styles.mainHeadingTxt}>TURN ON YOUR LOCATION</Text>
            <Text style={styles.secondTxt}>
              To continues, let your device turn on location, which uses
              Google’s location service
            </Text>
          </View>

          <View style={styles.buttonCont}>
            <Button
              isWhiteTxt
              title="YES, TURN IT ON"
              handlePress={() => alert('fired')}
            />

            <Button
              title="CANCEL"
              handlePress={() => alert('fired')}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default index;
