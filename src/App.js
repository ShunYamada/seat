/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import { View } from 'react-native';
import { Header } from './components/common';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText={'Home'} />
    </View>
  );
};

export default App;
