import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, Image } from 'react-native';
import { Card, CardSection } from './common';

const SeatDetail = () => {
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

  return (
     <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: 'https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/1914770_762645513836773_6796242385082186893_n.jpg?oh=be0fe37585fb100d467554441133f725&oe=5AEB60F1'}}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>Shun Yamada</Text>
          <Text style={infoTextStyle}><Icon style={timerStyle} name={'timer'} />11:00 <Text style={timerTextStyle}>Open</Text></Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: 'https://static.pexels.com/photos/265072/pexels-photo-265072.jpeg'}}
        />
      </CardSection>

      <CardSection>
        <View>
          <Text style={footerTextStyle}>LODGE</Text>
          <Text style={infoTextStyle}><Icon style={iconStyle} name={'map-marker'} />511 Mission St, SanFarncisco</Text>
        </View>
      </CardSection>
     </Card>
   );
};

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
