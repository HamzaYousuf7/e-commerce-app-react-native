import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';

//local import
import {Color} from '../../utils/colors';
import Cart from '../../components/Cart/index';
import styles from './style';
import {images, icons} from '../../utils/assets';
import Header from '../../components/Header';
import {Rating, AirbnbRating} from 'react-native-ratings';

const Index = (props) => {
  const Data = [
    {
      id: 1,
      name: images.item1,
      type: 'Sport Shoes',
      newPrice: 1450.0,
      oldPrice: 999.0,
      discount: 50,
    },
    {
      id: 2,
      name: images.item2,
      type: 'Sport Shoes',
      newPrice: 450.0,
      oldPrice: 999.0,
      discount: 50,
    },
    {
      id: 3,
      name: images.item3,
      type: 'Sport Shoes',
      newPrice: 450.0,
      oldPrice: 999.0,
      discount: 50,
    },
    {
      id: 4,
      name: images.item4,
      type: 'Sport Shoes',
      newPrice: 450.0,
      oldPrice: 999.0,
      discount: 50,
    },
    {
      id: 5,
      name: images.item5,
      type: 'Sport Shoes',
      newPrice: 450.0,
      oldPrice: 999.0,
      discount: 50,
    },
    {
      id: 6,
      name: images.item6,
      type: 'Sport Shoes',
      newPrice: 450.0,
      oldPrice: 999.0,
      discount: 50,
    },
  ];

  const ratingCompleted = (rating) => {
    console.log('Rating is: ' + rating);
  };

  const renderItem = ({item}) => {
    return (
      <Cart style={styles.cartSize}>
        <View style={styles.imgCont}>
          <Image
            style={styles.imageSize}
            resizeMode="contain"
            source={item.name}
          />
        </View>

        <View style={styles.stylePadding}>
          <Text style={styles.content}>{item.type}</Text>
          <Text style={styles.fontColor}>$ {item.newPrice}</Text>
          <View style={styles.changeDirection}>
            <Text style={styles.lineDecorator}>${item.oldPrice}</Text>
            <Text style={styles.discountPerTxt}> ( -{item.discount}% )</Text>
          </View>
          <View style={styles.styleStarContent}>
            <View style={styles.styleStar}>
              <Rating
                type="star"
                type="custom"
                ratingColor={String('#00ADEF')}
                ratingCount={5}
                startingValue={3}
                imageSize={10}
              />
            </View>
            <Text style={styles.ratingTxt}> (40) </Text>
          </View>
        </View>
      </Cart>
    );
  };
  return (
    <View style={styles.main}>
      <Header
        title="Sport Shoes"
        handleLeftIconPress={() => props.navigation.goBack()}
      />
      <View style={styles.container}>
        <FlatList
          data={Data}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default Index;
