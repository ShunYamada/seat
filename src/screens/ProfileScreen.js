import React from 'react';
import {
  Text,
  View
} from 'react-native';
import ProfileDetail from '../components/ProfileDetail';

class ProfileScreen extends React.Component {
  render() {
    return (
      <View>
        <ProfileDetail />
      </View>
    );
  }
}

ProfileScreen.navigationOptions = () => ({
  title: 'Profile',
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
  },
});

export default ProfileScreen;
