import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

//local import
import Button from '../../components/Button';
import {images, icons} from '../../utils/assets';
import styles from './style';

const index = (props) => {
  const [languesa, setlanguages] = useState([
    {id: 1, name: 'English', isSelected: true},
    {id: 2, name: 'French', isSelected: false},
    {id: 3, name: 'Chinese', isSelected: false},
    {id: 4, name: 'Japanese', isSelected: false},
  ]);

  const handleSelect = (index) => {
    // console.log(index);
    const tempArr = [...languesa];
    const allFalseLang = tempArr.map((singleLang) => {
      return {...singleLang, isSelected: false};
    });

    // console.log('===>', allFalseLang);
    allFalseLang[index].isSelected = true;

    setlanguages(allFalseLang);
  };
  return (
    <>
      <StatusBar backgroundColor="white" />
      <SafeAreaView style={styles.container}>
        <View style={styles.imgCont}>
          <Image
            source={images.selectLanguage}
            resizeMode="contain"
            style={styles.img}
          />
        </View>

        <Text style={styles.chooseLangTxt}>PLEASE CHOOSE YOUR LANGUAGE</Text>

        <View style={styles.langCont}>
          {languesa.map((singleLang, index) => (
            <TouchableOpacity
              key={singleLang.id}
              style={styles.singleLangCont}
              onPress={() => handleSelect(index)}
              activeOpacity={10}>
              <Text style={styles.singleLangTxt}>{singleLang.name}</Text>
              {singleLang.isSelected && (
                <View style={styles.checkedCheckCont}>
                  <Image
                    source={icons.checkedCheckBox}
                    resizeMode="contain"
                    style={styles.checkIcon}
                  />
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.buttonCont}>
          <Button
            isWhiteTxt
            title="Done"
            handlePress={() => props.navigation.navigate('LocationPermision')}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default index;
