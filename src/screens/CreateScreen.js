import React from 'react';
import { View, Text } from 'react-native';
import SeatCreate from '../components/SeatCreate';

const CreateScreen = () => {
  return (
    <View>
      <SeatCreate />
    </View>
  );
};
CreateScreen.navigationOptions = {
  title: 'Create Seat',
  headerStyle: {
    backgroundColor: '#36bfce',
    justifyContent: 'center',
    alignItems: 'center',
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

export default CreateScreen;
