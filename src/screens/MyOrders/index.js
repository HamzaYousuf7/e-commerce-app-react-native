import React from 'react';
import {View,Text,FlatList,Image,TouchableOpacity} from 'react-native';
import {images,icons} from '../../utils/assets';
import moment from 'moment';
import styles from './style';
import Cart from '../../components/Cart/index';
import Header from '../../components/Header';

const Index =props=>{

const Data=[
    {id:568123 , image: images.item1,type: "Sport Shoes",price: 1450.00,date:moment().utcOffset('+05:30').format(' MMM:D, YYYY')},
    {id:568124 , image: images.item2,type: "Sport Shoes",price: 1450.00,date:moment().utcOffset('+05:30').format(' MMM:D, YYYY')},
    {id:568125 , image: images.item3,type: "Sport Shoes",price: 1450.00,date:moment().utcOffset('+05:30').format(' MMM:D, YYYY')},
    {id:568126 , image: images.item4,type: "Sport Shoes",price: 1450.00,date:moment().utcOffset('+05:30').format(' MMM:D, YYYY')},
    {id:568127 , image: images.item5,type: "Sport Shoes",price: 1450.00,date:moment().utcOffset('+05:30').format(' MMM:D, YYYY')},
    {id:568128 , image: images.item6,type: "Sport Shoes",price: 1450.00,date:moment().utcOffset('+05:30').format(' MMM:D, YYYY')}
];


const renderItem=({item})=>{
    return(
        <View>
        <Cart style={styles.cartSize} >
            <View style={{margin:10}}>
                <View style={styles.alignItems}>
                    <Text style={styles.fontSize}>NO.</Text>
                    <Text style={styles.fontSize}>#{item.id}</Text>
                    <View style={styles.alignRight}>
                    <Text > Booked on {item.date}</Text>
                    </View>
                </View>
                <View style={styles.alignItems}>
                <Image
                    style={styles.imageSize}
                    source={item.image}
                />
                    <View style={{margin:10}}>
                        <Text style={styles.fontSize}>{item.type}</Text>
                        <View style={{marginTop:10}}>
                        <Text style={styles.fontColor}>${item.price}</Text>
                        </View>
                    </View>
                </View>
            
            </View>
        </Cart>
        <Cart style={styles.btnCartSize}>
            <View style={styles.alignCenter}>
                <TouchableOpacity >
                <Text style={styles.fontSize}>MANAGE ORDER</Text>    
                </TouchableOpacity>
            </View>
        </Cart>
        </View>
    );

};
return( 
    <View style={styles.main}>
        <Header
        title="My Orders"
        handleLeftIconPress={() => props.navigation.goBack()}
        />
        <View style={styles.container}>
        <FlatList data={Data}
            // numColumns={2}
            horizontal= 'false'
            keyExtractor={(item)=>item.id}
            renderItem={renderItem}
        />
        </View>

    </View>
    );

};
export default Index;