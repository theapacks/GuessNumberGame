import React, { useState, useRef, useEffect } from 'react';
import {View, Text, Alert, ScrollView} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import styles from './GameScreen.styles';
import NumberContainer from '../components/NumberContainer/NumberContainer';
import Card from '../components/Card/Card'
import SecondaryButton from '../components/SecondaryButton/SecondaryButton';
import PrimaryButton from '../components/PrimaryButton/PrimaryButton';
import BodyText from '../components/BodyText/BodyText';

const displayListItem = (value, attemptNumber) => (
    <View style={styles.listItem}>
        <BodyText style={styles.attempt}># {attemptNumber} </BodyText>
        <BodyText>{value}</BodyText>
    </View>        
);


// const generateRandomNumber = (min, max, exclude) => {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     const rndNum = Math.floor(Math.random() * (max - min)) + min;
//     if (rndNum === exclude) {
//       return generateRandomNumber(min, max, exclude);
//     } else {
//       return rndNum;
//     }
//   };

const GameScreen = props => {

    const {userChoice, onGameOver} = props;

    const generateRandomNumber = (startNumber, endNumber, numberToExclude) => {
        startNumber = Math.ceil(startNumber);
        endNumber = Math.floor(endNumber);

        const randomNumber = Math.floor(Math.random() * (endNumber - startNumber)) + startNumber;

        if(randomNumber === numberToExclude) {
            return generateRandomNumber(startNumber, endNumber, numberToExclude);
        }else {
            return randomNumber;
        }
    };

    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    const initialGuess = generateRandomNumber(1, 100, userChoice);
    const [pastAttempts, setPastAttempts] = useState([initialGuess]);
    const [generatedRandomNumber, setGeneratedNumber] = useState(initialGuess);
    useEffect(() => {
        if(generatedRandomNumber === userChoice) {
            onGameOver(pastAttempts.length);
        }
    }, [generatedRandomNumber, userChoice, onGameOver]);

    const nextNumberGuessHandler = direction => {
        if((direction === 'lower' && generatedRandomNumber < userChoice) ||
            (direction === 'greater' && generatedRandomNumber > userChoice)) {
                Alert.alert('Incorrect hint', 'The hint you provide is incorrect');
                return;
        } 
        if(direction === 'lower') {
            currentHigh.current = generatedRandomNumber;
        }else if(direction === 'greater') {
            currentLow.current = generatedRandomNumber;
        }
        const nextGuess = generateRandomNumber(currentLow.current, currentHigh.current, generatedRandomNumber);
        setGeneratedNumber(nextGuess);    
        setPastAttempts(currPastGuesses => [nextGuess,...currPastGuesses]);    
    };

    return (
        <View style={styles.screen}>
            <Text>Computer generated number</Text>
            <NumberContainer>{generatedRandomNumber}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <SecondaryButton onPress={nextNumberGuessHandler.bind(this, 'lower')}>
                    <Ionicons name="md-remove" color="white" size={24} />
                </SecondaryButton>
                <PrimaryButton onPress={nextNumberGuessHandler.bind(this, 'greater')} >
                    <Ionicons name="md-add" color="white" size={24} />
                </PrimaryButton>
            </Card>  
            <View style={styles.listContainer}>
                <ScrollView contentContainerStyle={styles.scrollList}>
                    {pastAttempts.map((guess, index) => (displayListItem(guess, pastAttempts.length - index)))}
                </ScrollView>                 
            </View>
        </View>
    );
};

export default GameScreen;