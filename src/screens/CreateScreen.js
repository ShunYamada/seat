import React from 'react';
import { View, Text } from 'react-native';

const CreateScreen = () => {
  return (
    <View>
      <Text>Hello</Text>
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
