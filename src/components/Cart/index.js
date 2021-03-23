import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';

//local import
import {Color} from '../../utils/colors';
import styles from './style';

const Index = props=>{
    return(
        <View style={{...styles.card, ...props.style}}>{props.children}</View>
    );

};

export default Index;