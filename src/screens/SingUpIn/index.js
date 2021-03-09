import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  ImageBackground,
} from 'react-native';

//local import
import Button from '../../components/Button';
import InputText from '../../components/InputText';
import {images, icons} from '../../utils/assets';
import styles from './style';

const index = (props) => {
  const [tab, setTab] = useState(2);

  useEffect(() => {
    const whatTab = props.route.params.isLogin ? 1 : 2;
    setTab(whatTab);
  }, []);

  const loginJSX = () => {
    return (
      <>
        <InputText icons={icons.account} placeHoldertxt="Enter User Name" />
        <InputText icons={icons.password} placeHoldertxt="Enter Password" />
        <Button
          isWhiteTxt
          title=" LOG IN"
          handlePress={() => props.navigation.navigate('SingIn')}
        />
        <View style={styles.fbTxtCont}>
          <Text style={styles.fbTxt}>SIGN IN WITH FACEBOOK</Text>
        </View>
      </>
    );
  };

  const singupJSX = () => {
    return (
      <>
        <InputText icons={icons.account} placeHoldertxt="Enter User Name" />
        <InputText icons={icons.password} placeHoldertxt="Enter Password" />
        <InputText icons={icons.password} placeHoldertxt="Confirm Password" />
        <Button
          isWhiteTxt
          title="SING UP"
          handlePress={() => props.navigation.navigate('SingIn')}
        />
        <View style={styles.fbTxtCont}>
          <Text style={styles.fbTxt}>SIGN IN WITH FACEBOOK</Text>
        </View>
      </>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />

      <ImageBackground source={images.authBackground} style={styles.bgImgCont}>
        <View style={styles.seconCont}>
          <View style={styles.tabCont}>
            <Text
              style={[styles.tabTxt, {opacity: tab == 1 ? 1 : 0.5}]}
              onPress={() => setTab(1)}>
              LOG IN
            </Text>
            <Text
              style={[styles.tabTxt, {opacity: tab == 2 ? 1 : 0.5}]}
              onPress={() => setTab(2)}>
              SING UP
            </Text>
          </View>

          {tab == 1 ? loginJSX() : singupJSX()}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default index;
