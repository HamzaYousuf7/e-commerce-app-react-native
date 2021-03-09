import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

// local imp
import OnBoarding from '../screens/OnBoarding';
import Selectlanguage from '../screens/Selectlanguage';
import LocationPermision from '../screens/LocationPermision';

//Stack int
const Stack = createStackNavigator();

export const MainStack = () => (
  <Stack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="OnBoarding">
    <Stack.Screen name="OnBoarding" component={OnBoarding} />
    <Stack.Screen name="Selectlanguage" component={Selectlanguage} />
    <Stack.Screen name="LocationPermision" component={LocationPermision} />
  </Stack.Navigator>
);
