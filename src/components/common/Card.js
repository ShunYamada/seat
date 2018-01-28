import React from 'react';
import { TouchableOpacity } from 'react-native';

const Card = ({onPress, children}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.containerStyle}>
      {children}
    </TouchableOpacity>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#eee',
    borderBottomWidth: 0,
    shadowColor: '#949494',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginTop: 10
  }
};

export default Card;
