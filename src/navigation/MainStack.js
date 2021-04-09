import React from 'react';
import {View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';
// navigation imp
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

// local imp
import OnBoarding from '../screens/OnBoarding';
import Selectlanguage from '../screens/Selectlanguage';
import LocationPermision from '../screens/LocationPermision';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import CategoryDetail from '../screens/CategoryDetail';
import CategoryDetailList from '../screens/CategoryDetailList';
import MyOrders from '../screens/MyOrders';
import OrderDetail from '../screens/OrderDetail';

import {icons, images} from '../utils/assets';

// Dimenstion API
const {width, height} = Dimensions.get('window');

//Stack int
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const drawerArr = [
  {
    id: 1,
    routeName: 'Home',
    name: 'Home',
    component: Home,
    icon: icons.home,
  },
  {
    id: 2,
    routeName: 'Categories',
    name: 'Categories',
    component: Home,
    icon: icons.categories,
  },
  {
    id: 3,
    routeName: 'Myorders',
    name: 'My orders',
    component: Home,
    icon: icons.orders,
  },
  {
    id: 4,
    routeName: 'Wishlist',
    name: 'Wish list',
    component: Home,
    icon: icons.heart,
  },
  {
    id: 5,
    routeName: 'Settings',
    name: 'Settings',
    component: Home,
    icon: icons.settings,
  },
  {
    id: 6,
    routeName: 'Notifications',
    name: 'Notifications',
    component: Home,
    icon: icons.notification,
  },
  {
    id: 7,
    routeName: 'HelpFAQ',
    name: 'Help & FAQ',
    component: Home,
    icon: icons.FAQ,
  },
];

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          width: '100%',
          height: height * 0.25,
          // backgroundColor: 'red',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: width * 0.25,
            height: width * 0.25,
            borderRadius: width / 2,
            overflow: 'hidden',
            marginVertical: height * 0.02,
            // backgroundColor: 'green',
            borderWidth: width * 0.001,
            borderColor: '#00ADEF',
          }}>
          <Image
            source={images.userProfile}
            resizeMode="contain"
            style={{width: '100%', height: '100%'}}
          />
        </View>

        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: height * 0.025,
            color: '#212121',
          }}>
          Sunny Vo
        </Text>

        <Text
          style={{
            fontFamily: 'Roboto-Regular',
            // fontSize: height * 0.025,
            color: '#464D53',
          }}>
          vctung@outlook.com
        </Text>
      </View>

      {/** tab start */}
      <View
        style={{
          width: '100%',
          height: height * 0.7,
          alignItems: 'center',
          marginTop: height * 0.015,
          // backgroundColor: 'pink',
        }}>
        {drawerArr.map((item) => (
          <TouchableOpacity
            style={{
              width: '90%',
              height: '8%',
              // backgroundColor: 'orange',
              marginBottom: height * 0.025,
              flexDirection: 'row',
              alignItems: 'center',
            }}
            activeOpacity={10}
            onPress={() => props.navigation.navigate(item.routeName)}>
            <View
              style={{
                width: '20%',
                height: '100%',
                // backgroundColor: 'gold',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={item.icon}
                resizeMode="contain"
                style={{width: '80%', height: '80%'}}
              />
            </View>

            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: height * 0.0185,
                color: '#464D53',
                marginLeft: width * 0.015,
              }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </DrawerContentScrollView>
  );
};

const DrawerScreen = () => (
  <Drawer.Navigator
    drawerContent={(props) => <CustomDrawer {...props} />}
    drawerStyle={{width: '80%'}}>
    <Drawer.Screen name="Home" component={Home} />
  </Drawer.Navigator>
);

export const MainStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
    <Stack.Screen name="OnBoarding" component={OnBoarding} />
    <Stack.Screen name="Selectlanguage" component={Selectlanguage} />
    <Stack.Screen name="LocationPermision" component={LocationPermision} />
    <Stack.Screen name="Home" component={DrawerScreen} />
    <Stack.Screen name="Cart" component={Cart} />
    <Stack.Screen name="MyOrders" component={MyOrders} />
    <Stack.Screen name="CategoryDetail" component={CategoryDetail} />
    <Stack.Screen name="CategoryDetailList" component={CategoryDetailList} />
    <Stack.Screen name="OrderDetail" component={OrderDetail} />
  </Stack.Navigator>
);
