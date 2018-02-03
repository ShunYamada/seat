import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SeatDetail from '../components/SeatDetail';

const DetailScreen = () => {
  return (
    <View>
      <SeatDetail />
    </View>
  );
};

DetailScreen.navigationOptions = {
  title: 'Seat',
  headerStyle: {
    backgroundColor: '#36bfce',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  headerTitleStyle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  }
};

export default DetailScreen;
