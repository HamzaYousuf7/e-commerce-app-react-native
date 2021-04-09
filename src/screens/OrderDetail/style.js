import {StyleSheet, Dimensions} from 'react-native';
import { color } from 'react-native-reanimated';

// local import
import {Color} from '../../utils/colors';

//dimenstion
const {width, height} = Dimensions.get('window');


export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:Color.PRIMARY_BG
         
    },
    decoratedCart:{
        width: width * 0.75,
        height: height * 0.10,
        marginTop:70,
        marginLeft:48,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        backgroundColor:'#989FA7'
    },
    cartSizeTop:{
        width: width * 0.85,
        height: height * 0.15,
        marginLeft:30,
        marginTop:-60,
        marginBottom:1,
        backgroundColor:Color.PRIMARY_BG,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
        
    },
    cartSize:{
        width: width * 0.85,
        height: height * 0.40,
        marginLeft:30,
        marginBottom:1,
        
        
    },
    cartSizeBottom:{
        width: width * 0.85,
        height: height * 0.12,
        marginLeft:30,
        marginBottom:1,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5   
    },
    FontColor:{
        color:'#00ADEF',
        fontSize: 30,   
    },
    direction:{
        flexDirection:'row',
    },
    changeDirection:{
        alignSelf:'flex-end',
       marginTop: -95,
       marginRight:15
    },
    imageSize: {
        width: width * 0.22,
        height: height * 0.13,
        resizeMode: 'contain'
    },
    margin:{
        margin:15
    },
    alignitem:{
        flexDirection:'row',
        justifyContent: 'space-between',
        margin:10,
    },
    alignItemLeft:{
        flex:1,
        paddingLeft:20
        
    },
    addMargin:{
        marginLeft:170
    }
    
});