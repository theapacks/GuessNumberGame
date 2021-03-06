import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './SecondaryButton.styles';

const SecondaryButton = props => {

    return (
        <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>
                    {props.children}
                </Text>
            </View>            
        </TouchableOpacity>
    );
};

export default SecondaryButton;
