import React from 'react';
import { View } from 'react-native';

const FooterSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
}

const styles = {
  containerStyle: {
    borderTopWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#eee',
    height: 75,
  }
}

export default FooterSection;
