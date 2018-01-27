import React from 'react';
import { StackNavigator } from 'react-navigation';
import { ListScreen } from './screens';
import { DetailScreen } from './screens';

export default StackNavigator({
  List: { screen: ListScreen },
  Detail: { screen: DetailScreen },
},{
  initialRouteName: 'Detail',
});
