import React from 'react';
import {SafeAreaView, View, Text, Image, StatusBar} from 'react-native';

//local import
import CartItem from '../../components/CartItem';
import Header from '../../components/Header';
import styles from './style';

const Index = (props) => {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Header title="Cart (3)" handleLeftIconPress={() => alert('Fired')} />

        <View style={styles.secondCont}>
          <View style={styles.cartItemCont}>
            <CartItem />
            <CartItem />
            <CartItem />
          </View>
          <View style={styles.checkoutCont}></View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Index;
