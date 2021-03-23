import {StyleSheet, Dimensions} from 'react-native';

// local import
import {Color} from '../../utils/colors';

//dimenstion
const {width, height} = Dimensions.get('window');


export default StyleSheet.create({
    main:{
        backgroundColor: '#F5F5F5',
        width: width * 1,
        height: height * 1,

        
    },
    container:{
        flex: 1,
         flexWrap: 'wrap',
    },
    cartSize:{
        width: width * 0.94,
        height: height * 0.15,
        margin: 9,
        flexWrap: 'wrap'
    },
    imageSize: {
        width: width * 0.30,
        height: height * 0.15,
        resizeMode: 'contain'
    },
    stylePadding:{
        margin: 20
    },
    content:{
        fontSize: 16,
        color: "black"
    },
    fontColor:{
        color:'#00ADEF',
        fontWeight: 'bold'
        
    },
    changeDirection:{
        flexDirection:'row'
    },
    lineDecorator:{
        fontFamily: 'Roboto-Thin',
        textDecorationLine: 'line-through',
        
    },
    styleStarContent:{
        flexDirection: 'row'
    },
    styleStar:{
        alignItems: 'flex-start',
        paddingTop: 5
    },
    
    
});