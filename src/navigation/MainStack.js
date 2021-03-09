import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

// local imp
import OnBoarding from '../screens/OnBoarding';

//Stack int
const Stack = createStackNavigator();

export const MainStack = () => (
  <Stack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="OnBoarding">
    <Stack.Screen name="OnBoarding" component={OnBoarding} />
  </Stack.Navigator>
);
