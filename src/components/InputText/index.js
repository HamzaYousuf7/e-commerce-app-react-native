import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';

//local import
import {icons} from '../../utils/assets';
import {Color} from '../../utils/colors';
import styles from './style';

const index = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconCont}>
        <Image source={props.icons} resizeMode="contain" style={styles.icon} />
      </View>
      <TextInput
        style={styles.textInput}
        placeholder={props.placeHoldertxt}
        placeholderTextColor={Color.WHITE}
      />
    </View>
  );
};

export default index;
