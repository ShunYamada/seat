import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class SigninScreen extends React.Component {
  render() {
    const { containerStyle, logoStyle, textStyle, buttonStyle, buttonTextStyle, iconStyle } = styles;
    const { navigation } = this.props;

    return (
      <View style={containerStyle}>
        <View>
          <Image
            style={logoStyle}
            source={require('../../assets/images/logo.png')}
          />
        </View>

        <View>
          <Text style={textStyle}>A social seat app</Text>
        </View>

        <View>
          <TouchableOpacity
            style={buttonStyle}
            onPress={() => navigation.navigate('Main')}
          >
            <Text style={buttonTextStyle}>
              <Icon style={iconStyle} name={'facebook-box'} /> Signin with Facebook
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 120
  },
  logoStyle: {
    width: 120,
    height: 120,
  },
  textStyle: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: -60,
  },
  buttonStyle: {
    backgroundColor: '#4267b2',
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 30,
    paddingLeft: 30,
    width: '100%',
    borderRadius: 50
  },
  buttonTextStyle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff'
  },
  iconStyle: {
    fontSize: 20
  }
}

export default SigninScreen;
