import React from 'react';
import { View, Text, ScrollView, Picker } from 'react-native';
import { Button, DetailSection, FooterSection, Input } from './common';

class SeatCreate extends React.Component {

  render() {
    const { navStyle } = styles;

    return (
      <View style={{flexDirection:'column',justifyContent:'flex-end'}}>
        <ScrollView style={{ backgroundColor: '#fff' }}>
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
            />
          </DetailSection>

          <DetailSection>
            <View>
              <Input
                label={'Category'}
                placeholder={'Cafe, office, house ...'}
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
              />
            </View>
          </DetailSection>

          <DetailSection>
            <Input
              label={'Price($)'}
              keyboardType={'number-pad'}
            />
          </DetailSection>
        </ScrollView>

        <FooterSection>
          <Button>
            Create
          </Button>
        </FooterSection>
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
}

export default SeatCreate;
