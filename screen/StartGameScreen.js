import React, { useState } from 'react';
import { View, Text, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import Input from '../components/Input/Input';
import Card from '../components/Card/Card';
import styles from './StartGameScreen.styles';
import Colors from '../constants/colors';

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirm, setConfirm] = useState(false);

  const numberInputHandler = inputText => {
    setEnteredValue(inputText);
    setConfirm(false);
  };

  const resetButtonHandler = () => {
    setEnteredValue('');
  };

  const confirmButtonHandler = () => {
    if(isNaN(parseInt(enteredValue)) || parseInt(enteredValue) <= 0 || parseInt(enteredValue) > 99){
      Alert.alert('Invalid Number', 'Number must be between 1 and 99');
      return;
    }
    setConfirm(true);
    Keyboard.dismiss();
    props.onStartGame(enteredValue);
  };
  let confirmedOutput;
  if(confirm) {
    confirmedOutput = <Text>{enteredValue}</Text>;
  }
  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input 
            onChangeText={numberInputHandler}
            value={enteredValue}
            blurOnSubmit 
            autoCapitilize='none' 
            autoCorrect={false} 
            keyboardType='number-pad' 
            maxLength={2} 
            style={styles.input} />
          <View style={styles.buttonContainer}>
              <View style={styles.button}>
                  <Button title="Reset" color={Colors.accent} onPress={resetButtonHandler} />
              </View>
              <View style={styles.button}>
                  <Button title="Confirm" color={Colors.primary} onPress={confirmButtonHandler} />
              </View>
          </View>
        </Card>  
        {confirmedOutput}    
      </View>
    </TouchableWithoutFeedback>
  );
};



export default StartGameScreen;
