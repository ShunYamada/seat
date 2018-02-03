import React from 'react';
import {
  Text,
  View
} from 'react-native';
import NotificationList from '../components/NotificationList';

class NotificationScreen extends React.Component {
  render() {
    return (
      <View>
        <NotificationList />
      </View>
    );
  }
}

NotificationScreen.navigationOptions = () => ({
  title: 'Notification',
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

export default NotificationScreen;
