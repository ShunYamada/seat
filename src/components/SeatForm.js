import React from 'react';
import { View, Text } from 'react-native';
import { DetailSection, Input } from './common';

class EmployeeForm extends React.Component {
  render() {
    const { navStyle } = styles;

    return (
      <View style={{ backgroundColor: '#fff' }}>
        <DetailSection>
          <View>
            <Text style={navStyle}>Selected Photos</Text>
            <Text></Text>
          </View>
        </DetailSection>

        <DetailSection>
          <Input
            label={'Seat Title'}
            placeholder={'What is the seat called?'}
            value={this.props.title}
          />
        </DetailSection>

        <DetailSection>
          <View>
            <Input
              label={'Category'}
              placeholder={'Cafe, office, house ...'}
              value={this.props.category}
            />
          </View>
        </DetailSection>

        <DetailSection>
          <View>
            <Text style={navStyle}>Open Hours</Text>
            <Text></Text>
          </View>
        </DetailSection>

        <DetailSection>
          <View>
            <Input
              label={'Address'}
              placeholder={'Where are you now?'}
              value={this.props.address}
            />
          </View>
        </DetailSection>

        <DetailSection>
          <Input
            label={'Price($)'}
            keyboardType={'number-pad'}
            value={this.props.price}
          />
        </DetailSection>
      </View>
    );
  }
}

const styles = {
  navStyle: {
    width: 320,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  }
};

export default EmployeeForm;
