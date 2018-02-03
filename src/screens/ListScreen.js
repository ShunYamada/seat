import React from 'react';
import { View } from 'react-native';
import SeatList from '../components/SeatList';

const ListScreen = ({ navigation }) => {
  return (
    <View>
      <SeatList navigation={navigation} />
    </View>
  );
};

ListScreen.navigationOptions = () => ({
  title: 'Home',
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
});

export default ListScreen;
