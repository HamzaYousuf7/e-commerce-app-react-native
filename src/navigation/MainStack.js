import React from 'react';
import {View, Text, Dimensions} from 'react-native';
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

import {icons} from '../utils/assets';

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
      <View>
        <Text>main heading or header</Text>
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
  </Stack.Navigator>
);
