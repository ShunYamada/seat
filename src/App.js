/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import SeatList from './components/SeatList';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText={'Home'} />
      <SeatList />
    </View>
  );
};

export default App;
