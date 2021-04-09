import React from 'react';
import {View,Text,FlatList,Image,TouchableOpacity,ScrollView} from 'react-native';

import moment from 'moment';
import styles from './style';
import Cart from '../../components/Cart/index';
import Header from '../../components/Header';
import {images,icons} from '../../utils/assets';

const Index =props =>{
    const order=[
        {id:1893,date:moment().utcOffset('+05:30').format(' MMM DD, YYYY hh:mm A')}
    ]
    const Data=[
        {qunatity:1,product: 'Nike Shoes',price:'1200.00'},
        {qunatity:2,product: 'Nike T-Shirt',price:'840.22'},
        {qunatity:1,product: 'L&V Jeans',price:'4200.00'},
        {qunatity:1,product: 'Thuong dinh shoes',price:'110.00'},
        {qunatity:1,product: 'Goi mi tom',price:'1.00'},
        {qunatity:1,product: 'Apple smart watch',price:'1200.00'},
    ];
    const otherTax=[
        {item: 'Fee',amount: 20.00},
        {item: 'VAT Tax',amount: 450.00},
    ]
return(
<View>
    <Header
        title="Order detail"
        handleLeftIconPress={() => props.navigation.goBack()}
        />
    <View style={styles.container} >
        <View style={styles.container}>
            <Cart style={styles.decoratedCart}>
                <View></View>
            </Cart>
            <Cart style={styles.cartSizeTop} >
                <View style={styles.margin}>
                <Text>Order</Text>
                <View style={styles.direction}>
                <Text style={styles.FontColor}>No.#</Text>
                {order.map((item,key)=>(<Text style={styles.FontColor}>{item.id}</Text>))}
                </View>
                    {order.map((item,key)=><Text>{item.date}</Text>)}
                </View>
                <View style={styles.changeDirection}>
                    <Image
                    style={styles.imageSize}
                    source={images.LogoOnly}
                    />
                </View>
           
            </Cart>
            
            <Cart style={styles.cartSize}>
            <ScrollView>
            {Data.map(item=>(
                <View style={styles.alignitem}>
                    <Text>{item.qunatity}</Text>
                    <View style={styles.alignItemLeft}>
                    <Text>{item.product}</Text>
                    </View>
                    <Text>${item.price}</Text>
                </View>
            ))}
           
            {otherTax.map(item=>(
                <View style={styles.alignitem}>
                    <View style={styles.addMargin}>
                    <Text>{item.item}</Text>
                    </View>
                    <Text>${item.amount}</Text>
                </View>
            ))}
             </ScrollView>
            </Cart>
            <Cart style={styles.cartSizeBottom}>
                <View style={{alignItems:'center',marginTop:15}}>
                    <Text >Grand Total</Text>
                    <Text style={styles.FontColor}>$4572.02</Text>
                </View>

            </Cart>
        </View>

    </View>

</View>);
};

export default Index;