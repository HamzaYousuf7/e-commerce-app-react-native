import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';

//local import
import {images, icons} from '../../utils/assets';
import {Color} from '../../utils/colors';
import styles from './style';

const index = (props) => {
  return (
    <View style={styles.simpleHeaderCont}>
      <TouchableOpacity
        style={styles.leftIconCont}
        activeOpacity={10}
        onPress={props.handleLeftIconPress}>
        <Image
          source={icons.backArrow}
          resizeMode="contain"
          style={styles.leftIcon}
        />
      </TouchableOpacity>

      <Text style={styles.titleTxt}>{props.title}</Text>
    </View>
  );
};

export default index;
