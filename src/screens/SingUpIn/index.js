import React, {useState} from 'react';
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

  const loginJSX = () => {
    return (
      <>
        <InputText icons={icons.account} />
        <InputText icons={icons.password} />
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
        <InputText icons={icons.email} />
        <InputText icons={icons.password} />
        <InputText icons={icons.password} />
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
            <Text style={styles.tabTxt}>LOG IN</Text>
            <Text style={styles.tabTxt}>SING UP</Text>
          </View>

          {tab == 1 ? loginJSX() : singupJSX()}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default index;
