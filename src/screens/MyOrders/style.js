import {StyleSheet,Dimensions} from 'react-native';

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
         
    },
    cartSize:{
        width: width * 0.94,
        height: height * 0.20,
        margin: 9,
        marginBottom:1
        
    }, 
    btnCartSize:{
        width: width * 0.94,
        height: height * 0.10,
        marginLeft: 9
        
    },
    alignItems:{
        flexDirection:'row',
        marginBottom: 10,
        
       
    },
    alignRight:{
        flex: 1,
        flexDirection:'row',
        justifyContent: 'flex-end'
    },
    imageSize: {
        width: width * 0.30,
        height: height * 0.13,
        resizeMode: 'contain'
    },
    fontSize:{
        fontSize:18,
        
        color: 'black'
    },
    fontColor:{
        color:'#00ADEF',
        fontWeight: 'bold',
        fontSize: 18,   
    },
    alignCenter:{
        flex: 1,
        flexDirection:'row',
        justifyContent:'center',
        padding: 25
    },
   
});