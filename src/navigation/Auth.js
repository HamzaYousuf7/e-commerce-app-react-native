import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

// local imp
import Spalsh from '../screens/Spalsh';
import Welcome from '../screens/Welcome';
import SingUpIn from '../screens/SingUpIn';


//Stack int
const Stack = createStackNavigator();

export const AuthStack = () => (
  <Stack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="Spalsh">
    <Stack.Screen name="Spalsh" component={Spalsh} />
    <Stack.Screen name="Welcome" component={Welcome} />
    <Stack.Screen name="SingUpIn" component={SingUpIn} />
  </Stack.Navigator>
);
