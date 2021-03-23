import {StyleSheet, Dimensions} from 'react-native';

// local import
import {Color} from '../../utils/colors';

//dimenstion
const {width, height} = Dimensions.get('window');


export default StyleSheet.create({
    cartSize:{
        width: width * 0.45,
        height: height * 0.37,
        margin: 10
    },
    imageSize: {
        width: width * 0.45,
        height: height * 0.25,
    },
    container:{
        flex: 1,
        
        flexDirection: 'row',
        justifyContent: 'space-between',
          
    },
    main:{
        backgroundColor: '#F5F5F5',
        width: width * 1,
        height: height * 1,
        
    },
    viewSize:{
        width: width * 1,
        height: height * 0.20,
        backgroundColor: 'white',
        padding: 10
    },
    content:{
        fontSize: 16,
        color: "black"
    },
    fontColor:{
        color:'#00ADEF',
        fontWeight: 'bold'
        
    },
    lineDecorator:{
        fontFamily: 'Roboto-Thin',
        textDecorationLine: 'line-through',
        
    },
    changeDirection:{
        flexDirection:'row'
    },
    iconSize:{
        width: 20,
        height: 20,
        textDecorationColor: '#00ADEF',
        tintColor: '#00ADEF'
    },
    styleStar:{
        alignItems: 'flex-start',
        paddingTop: 5
    },
    styleStarContent:{
        flexDirection: 'row'
    },
    stylePadding:{
        paddingLeft: 5
    }
});