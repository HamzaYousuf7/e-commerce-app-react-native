import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';

//local import
import {Color} from '../../utils/colors';
import styles from './style';

const index = (props) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {backgroundColor: props.isWhiteBG ? Color.WHITE : Color.CYAN},
      ]}
      onPress={props.handlePress}
      activeOpacity={10}>
      <Text
        style={[
          styles.txt,
          {color: props.isWhiteTxt ? Color.WHITE : Color.BUTTON_TXT},
        ]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default index;
