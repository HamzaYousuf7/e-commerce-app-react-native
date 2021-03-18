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
        <Image source={images.item1} resizeMode="contain" style={styles.img} />
      </View>
      <View style={styles.detailCont}>
        <Text style={styles.titleTxt}>Product name</Text>
        <Text style={styles.sizeTxt}>Size : XL </Text>
        <Text style={styles.priceTxt}>$900.00</Text>
      </View>
      <View style={styles.quantityCont}>
        <TouchableOpacity style={styles.plusIconCont} activeOpacity={10}>
          <Image
            source={icons.PlusIcon}
            resizeMode="contain"
            style={styles.plusMinIcon}
          />
        </TouchableOpacity>
        <Text style={styles.quantityTxt}>2</Text>
        <TouchableOpacity style={styles.plusIconCont} activeOpacity={10}>
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
