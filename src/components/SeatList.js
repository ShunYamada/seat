import React from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import SeatDetail from './SeatDetail';

class SeatList extends React.Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.seats);
  }

  renderRow(seat) {
    return <SeatDetail seat={seat} />;
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  return { seats: state.seats };
};

export default connect(mapStateToProps)(SeatList);
