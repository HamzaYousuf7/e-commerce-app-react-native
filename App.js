/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

// navigation impor
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './src/navigation/Auth';

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </>
  );
};

export default App;
