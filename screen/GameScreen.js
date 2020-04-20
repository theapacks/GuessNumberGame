import React, { useState, useRef, useEffect } from 'react';
import {View, Text, Alert, ScrollView, Dimensions} from 'react-native';
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
    const [availableDeviceWidth, setAvailalbleDeviceWidth] = useState(Dimensions.get('window').width);
    const [availableDeviceHeight, setAvailalbleDeviceHeight] = useState(Dimensions.get('window').height);

    useEffect(() => {
        const updateLayout = () => {
            setAvailalbleDeviceHeight(Dimensions.get('window').height);
            setAvailalbleDeviceWidth(Dimensions.get('window').width);
        }
        Dimensions.addEventListener('change', updateLayout);

        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        };
    });

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

    if(availableDeviceHeight < 500) {
        return (
            <View style={styles.screen}>
            <Text>Computer generated number</Text>
            <View style={styles.landscapControls}>
                <SecondaryButton onPress={nextNumberGuessHandler.bind(this, 'lower')}>
                    <Ionicons name="md-remove" color="white" size={24} />
                </SecondaryButton>

                <NumberContainer>{generatedRandomNumber}</NumberContainer>

                <PrimaryButton onPress={nextNumberGuessHandler.bind(this, 'greater')} >
                    <Ionicons name="md-add" color="white" size={24} />
                </PrimaryButton>
            </View>
            <View style={styles.listContainer}>
                <ScrollView contentContainerStyle={styles.scrollList}>
                    {pastAttempts.map((guess, index) => (displayListItem(guess, pastAttempts.length - index)))}
                </ScrollView>                 
            </View>
        </View>            
        );
    }

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