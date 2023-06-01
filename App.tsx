/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList
} from 'react-native';

import Navigation from  './src/navigation'

function App(): JSX.Element {


  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <Navigation/>
    
    </>
  );
}


export default App;
