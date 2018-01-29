import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button, DetailSection, FooterSection } from './common';

class SeatCreate extends React.Component {

  render() {
    const { navStyle } = styles;

    return (
      <ScrollView style={{ backgroundColor: '#fff' }}>
        <DetailSection>
          <View>
            <Text style={navStyle}>Selected Photos</Text>
            <Text></Text>
          </View>
        </DetailSection>

        <DetailSection>
          <View>
            <Text style={navStyle}>Seat Title</Text>
            <Text></Text>
          </View>
        </DetailSection>

        <DetailSection>
          <View>
            <Text style={navStyle}>Category</Text>
            <Text></Text>
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
            <Text style={navStyle}>Address</Text>
            <Text></Text>
          </View>
        </DetailSection>

        <DetailSection>
          <View>
            <Text style={navStyle}>Seat Price</Text>
            <Text></Text>
          </View>
        </DetailSection>

        <FooterSection>
          <Button>
            Create
          </Button>
        </FooterSection>
      </ScrollView>
    );
  }
}

const styles = {
  navStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  }
}

export default SeatCreate;
