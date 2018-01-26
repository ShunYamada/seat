import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, Image } from 'react-native';
import { Card, CardSection } from './common';

class SeatDetail extends React.Component {
  render() {

    const {
      thumbnailContainerStyle,
      thumbnailStyle,
      headerContentStyle,
      headerTextStyle,
      imageStyle,
      footerTextStyle,
      iconStyle,
      infoTextStyle,
      timerStyle,
      timerTextStyle
    } = styles;
    const { id, title, host, address, hour, thumbnail, image } = this.props.seat;

    return (
       <Card>
        <CardSection>
          <View style={thumbnailContainerStyle}>
            <Image
              style={thumbnailStyle}
              source={{uri: thumbnail}}
            />
          </View>
          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{host}</Text>
            <Text style={infoTextStyle}><Icon style={timerStyle} name={'timer'} />{hour} <Text style={timerTextStyle}>Open</Text></Text>
          </View>
        </CardSection>

        <CardSection>
          <Image
            style={imageStyle}
            source={{ uri: image}}
          />
        </CardSection>

        <CardSection>
          <View>
            <Text style={footerTextStyle}>{title}</Text>
            <Text style={infoTextStyle}><Icon style={iconStyle} name={'map-marker'} />{address}</Text>
          </View>
        </CardSection>
       </Card>
     );
   }
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 240,
    flex: 1,
    width: null
  },
  footerTextStyle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  iconStyle: {
    fontSize: 18,
    color: '#949494'
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
  }
};

export default SeatDetail;
