import React from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import SeatItem from './SeatItem';

class SeatList extends React.Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.seats);
  }

  renderItem({ item }) {
    return <SeatItem
      seat={item}
      navigation={this.props.navigation}
    />;
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        keyExtractor={item => item.id}
        renderItem={this.renderItem.bind(this)}
      />
    );
  }
}

export default connect(null)(SeatList);
