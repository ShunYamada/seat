import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  DetailScreen,
  ListScreen,
  CreateScreen,
  NotificationScreen,
  ProfileScreen,
  SigninScreen
} from './screens';

const Home = StackNavigator({
  List: {
    screen: ListScreen
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: ({navigation}) => ({
      headerRight: (
        <TouchableOpacity
          onPress={()=>navigation.navigate('Profile')}
          style={styles.headerIconStyle}
        >
          <Icon name='account' size={28} style={{color: '#fff'}}/>
        </TouchableOpacity>
      ),
      headerLeft: (
        <TouchableOpacity
          onPress={()=>navigation.navigate('Notification')}
          style={styles.headerIconStyle}
        >
          <Icon name='bell' size={28} style={{color: '#fff'}}/>
        </TouchableOpacity>
      )
    })
  },
  Notification: {
    screen: NotificationScreen
  },
  Profile: {
    screen: ProfileScreen,
  }
},{
  initialRouteName: 'Detail',
});

const Add = StackNavigator({
  Create: {
    screen: CreateScreen
  }
}, {
  initialRouteName: 'Create'
});

const Main = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name='home'
          size={28}
          style={{ color: tintColor }}
        />
      )
    }
  },
  Add: {
    screen: Add,
    navigationOptions: {
      tabBarLabel: 'Create',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name='camera'
          size={28}
          style={{ color: tintColor }}
        />
      )
    }
  },
}, {
  tabBarOptions: {
    activeTintColor: '#36bfce',
    inactiveTintColor: '#949494',
    style: {
      backgroundColor: '#fff',
    },
  },
});

export const Router = StackNavigator({
  Signin: {
    screen: SigninScreen,
  },
  Main: {
    screen: Main,
  },
}, {
  initialRouteName: 'Signin',
  headerMode: 'none'
});

const styles = {
  headerIconStyle: {
    paddingHorizontal: 10
  }
}
