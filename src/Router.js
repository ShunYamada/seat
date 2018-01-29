import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DetailScreen, ListScreen, CreateScreen } from './screens';

const Home = StackNavigator({
  List: {
    screen: ListScreen
  },
  Detail: {
    screen: DetailScreen
  },
},{
  initialRouteName: 'Detail',
});

export const Tab = TabNavigator({
  Create: {
    screen: CreateScreen,
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
}, {
  tabBarOptions: {
    activeTintColor: '#36bfce',
    inactiveTintColor: '#949494',
    showLabel: false,
    style: {
      backgroundColor: '#fff',
    },
  },
});
