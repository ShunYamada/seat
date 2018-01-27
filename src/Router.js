import React from 'react';
import { StackNavigator } from 'react-navigation';
import { ListScreen } from './screens';

export default StackNavigator({
  List: { screen: ListScreen }
}, {
  initialRouteName: 'List',
});
