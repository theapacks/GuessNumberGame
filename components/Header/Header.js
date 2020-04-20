import React from 'react';
import { View, Text, Platform } from 'react-native';

import styles from './Header.styles';

const Header = props => {
    return (
      <View style={{...styles.header, ...Platform.select({ios: styles.headerIOS, android: styles.headerAndroid})}}>
        <Text style={styles.headerTitle}>{props.title}</Text>
      </View>
    );
};

export default Header;