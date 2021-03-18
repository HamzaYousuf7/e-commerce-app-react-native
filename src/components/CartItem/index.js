import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';

//local import
import {images, icons} from '../../utils/assets';
import {Color} from '../../utils/colors';
import styles from './style';

const index = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgCont}>
        <Image
          source={props.item.img}
          resizeMode="contain"
          style={styles.img}
        />
      </View>
      <View style={styles.detailCont}>
        <Text style={styles.titleTxt}>{props.item.title}</Text>
        <Text style={styles.sizeTxt}>Size : {props.item.size}</Text>
        <Text style={styles.priceTxt}>${props.item.price}</Text>
      </View>
      <View style={styles.quantityCont}>
        <TouchableOpacity
          style={styles.plusIconCont}
          activeOpacity={10}
          onPress={props.handlePlusPress}>
          <Image
            source={icons.PlusIcon}
            resizeMode="contain"
            style={styles.plusMinIcon}
          />
        </TouchableOpacity>
        <Text style={styles.quantityTxt}>{props.item.quantity}</Text>

        <TouchableOpacity
          style={styles.plusIconCont}
          activeOpacity={10}
          onPress={props.handleMinsPress}>
          <Image
            source={icons.MinusIcon}
            resizeMode="contain"
            style={styles.plusMinIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default index;
