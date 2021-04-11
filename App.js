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
import {MainStack} from './src/navigation/MainStack';

// redux
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

// local redux imp
import userReducer from './src/store/reducer/userReducer';

// root reducer
const rootReducer = combineReducers({
  userReducer: userReducer,
});

// main store
const store = createStore(rootReducer, applyMiddleware(thunk));

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          {false ? <AuthStack /> : <MainStack />}
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
