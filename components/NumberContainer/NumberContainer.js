import React from 'react';
import { View, Text } from 'react-native';

import styles from './NumberContainer.styles';

const NumberContainer = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

export default NumberContainer;
