import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DetailSection, ImageSection, FooterSection, Button, Confirm } from './common';

class SeatDetail extends React.Component {
  state = { showModal: false };

  onAccept() {
    this.setState({ showModal: false });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    const {
      imageStyle,
      titleTextStyle,
      infoTextStyle,
      timerStyle,
      timerTextStyle,
      categoryTextStyle,
      mainTextStyle,
      thumbnailStyle,
      thumbnailContainerStyle,
      amenityStyle,
      amenityIconStyle,
      navStyle,
      sectionStyle,
      iconStyle
    } = styles;

    return (
      <View style={{flexDirection:'column',justifyContent:'flex-end'}}>
        <ScrollView style={{ backgroundColor: '#fff' }}>
          <ImageSection>
           <Image
              style={imageStyle}
              source={{uri: 'https://static.pexels.com/photos/265072/pexels-photo-265072.jpeg'}}
            />
          </ImageSection>

          <DetailSection>
            <View>
              <Text style={titleTextStyle}>The Room of Alamo Square</Text>
              <Text style={infoTextStyle}><Icon style={timerStyle} name={'timer'} />11:00 <Text style={timerTextStyle}>Open</Text></Text>
            </View>
          </DetailSection>

          <DetailSection style={thumbnailContainerStyle}>
            <View>
              <Text style={categoryTextStyle}>Cafe</Text>
              <Text>Hosted by <Text style={mainTextStyle}>Shun Yamada</Text></Text>
            </View>
            <View>
              <Image
                style={thumbnailStyle}
                source={{uri: 'https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/1914770_762645513836773_6796242385082186893_n.jpg?oh=be0fe37585fb100d467554441133f725&oe=5AEB60F1'}}
              />
            </View>
          </DetailSection>

          <DetailSection>
            <View>
              <Text style={navStyle}>About Host</Text>
              <Text styke={sectionStyle}>Hey, Whats up guys! I am Shun, Freerider.
                Lets Talk and connect, I like meeting stranger:)
                I am from japan. Nice to meet you guys.</Text>
            </View>
          </DetailSection>

          <DetailSection>
            <View>
              <Text style={navStyle}>Rental Staffs</Text>
              <Text style={mainTextStyle}>#iPhoneCable #AndroidCable #MacBookProCable</Text>
            </View>
          </DetailSection>

          <DetailSection>
            <View>
              <Text style={navStyle}>Address</Text>
              <Text style={infoTextStyle}><Icon style={iconStyle} name={'map-marker'} />Stenier St Hayes St, SanFrancisco</Text>
            </View>
          </DetailSection>

          <FooterSection>
            <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
              Request for $5
            </Button>
          </FooterSection>
          
        </ScrollView>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to request this?
        </Confirm>
      </View>
    );
  }
}

const styles = {
  imageStyle: {
    height: 240,
    flex: 1,
    width: null,
  },
  titleTextStyle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  infoTextStyle: {
    marginTop: 5,
    fontSize: 16
  },
  timerStyle: {
    marginTop: 5,
    fontSize: 16,
    color: '#41a700'
  },
  timerTextStyle: {
    color: '#41a700'
  },
  categoryTextStyle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  mainTextStyle: {
    fontSize: 16,
    color: '#36bfce'
  },
  thumbnailStyle: {
    height: 60,
    width: 60,
    borderRadius: 30
  },
  thumbnailContainerStyle: {
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  amenityIconStyle: {
    fontSize: 30,
    paddingTop: 10,
    paddingBottom: 10
  },
  navStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  iconStyle: {
    fontSize: 18,
    color: '#949494'
  }
}

export default SeatDetail;
