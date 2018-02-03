import React from 'react';
import { View, Text, ScrollView, Picker } from 'react-native';
import { connect } from 'react-redux';
import { FooterSection, Button } from './common';
import SeatForm from './SeatForm';

class SeatCreate extends React.Component {
  onButtonPress() {
    const { title, category, address, price } = this.props;

    this.props.seatCreate({ title, category, address, price })
  }

  render() {
    return (
      <View style={{flexDirection:'column',justifyContent:'flex-end'}}>
        <ScrollView>
          <SeatForm {...this.props} />
          <FooterSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Create
            </Button>
          </FooterSection>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { title, category, address, price } = state.seatForm;

  return { title, category, address, price };
};

export default SeatCreate;
