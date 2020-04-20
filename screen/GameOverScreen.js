import React from 'react';
import { View, Text, Image } from 'react-native';
import PrimaryButton from '../components/PrimaryButton/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton/SecondaryButton';
import styles from './GameOverScreen.styles';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.resultsText}>I got it!</Text>
            <View style={styles.imageContainer}>
                <Image 
                    resizeMode="cover" 
                    style={styles.image} 
                    source={require('../assets/success.png')}
                     // source={{uri: 'https://thumbs.dreamstime.com/b/mountain-peak-red-flag-image-top-snow-covered-57326074.jpg'}}
                />
            </View>
            <Text style={styles.resultsText}>I guessed your number <Text style={styles.highlight}>{props.userNumber}</Text> after <Text style={styles.highlight}>{props.numberOfAttempts}</Text> attempts</Text>
            <View style={styles.buttonContainer}>
                <SecondaryButton onPress={() => {}}>Exit Game</SecondaryButton>
                <PrimaryButton onPress={props.onNewGame}>New Game</PrimaryButton>
            </View>             
        </View>
    );
};

export default GameOverScreen;