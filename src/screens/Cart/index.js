import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';

//local import
import CartItem from '../../components/CartItem';
import Header from '../../components/Header';
import Button from '../../components/Button';

import {images, icons} from '../../utils/assets';
import styles from './style';

const Index = (props) => {
  const [cartItems, setcartItems] = useState([
    {
      id: 1,
      title: 'Shoes',
      size: 'SM',
      price: '900.00',
      img: images.item1,
      quantity: 10,
    },
    {
      id: 2,
      title: 'Shoes',
      size: 'XS',
      price: '100.00',
      img: images.item2,
      quantity: 10,
    },
    {
      id: 3,
      title: 'Shoes',
      size: 'LG',
      price: '500.00',
      img: images.item3,
      quantity: 10,
    },
    {
      id: 4,
      title: 'Shoes',
      size: 'SM',
      price: '900.00',
      img: images.item4,
      quantity: 10,
    },
    {
      id: 5,
      title: 'Shoes',
      size: 'MD',
      price: '300.00',
      img: images.item5,
      quantity: 10,
    },
    {
      id: 6,
      title: 'Shoes',
      size: 'SM',
      price: '900.00',
      img: images.item6,
      quantity: 10,
    },
  ]);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Header
          title="Cart (3)"
          handleLeftIconPress={() => props.navigation.goBack()}
        />

        <View style={styles.secondCont}>
          <View style={styles.cartItemCont}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {cartItems.map((item) => (
                <CartItem
                  item={item}
                  handlePlusPress={() => alert('plus')}
                  handleMinsPress={() => alert('min')}
                />
              ))}
            </ScrollView>
          </View>
          <View style={styles.checkoutCont}>
            <Text style={styles.txt1}>GRAND TOTAL (INCLUDED TAX )</Text>
            <Text style={styles.txt2Price}>$1125,12</Text>

            <View style={styles.buttonCont}>
              <Button
                isWhiteTxt
                title="CHECK OUT NOW"
                handlePress={
                  () => alert('Navigaet')
                  //   props.navigation.navigate('LocationPermision')
                }
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Index;
