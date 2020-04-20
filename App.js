import React, { useState } from 'react';
import { StyleSheet, View, Alert, SafeAreaView } from 'react-native';
import * as Fonts from 'expo-font';
import { AppLoading } from 'expo';

import Header from './components/Header/Header';
import StartGameScreen from './screen/StartGameScreen';
import GameScreen from './screen/GameScreen';
import GameOverScreen from './screen/GameOverScreen';

const fetchFonts = () => {
  return Fonts.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
}

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [numberOfGuessAttempts, setNumberOfGuessAttempts] = useState(0);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  if(!isDataLoaded){
    return (
        <AppLoading 
          startAsync={fetchFonts} 
          onError={(error) => Alert.alert('Error loading...', 'Problem loading data: '+error)}
          onFinish={() => setIsDataLoaded(true)} />
      );
  }
  const configureNewGame = () => {
    setNumberOfGuessAttempts(0);
    setUserNumber(null);
  };

  const gameOverHandler = numberOfAttempts => {
    setNumberOfGuessAttempts(numberOfAttempts);
  };

  const startGameHandler = selectedNumnber => {
    setUserNumber(selectedNumnber);
    setNumberOfGuessAttempts(0);
  };

  let content = <StartGameScreen onStartGame={startGameHandler}  />;
  if(userNumber && numberOfGuessAttempts <= 0) {
    content = <GameScreen userChoice={parseInt(userNumber)} onGameOver={gameOverHandler} />;
  }else if (numberOfGuessAttempts > 0){
    content = <GameOverScreen 
                userNumber={userNumber} 
                numberOfAttempts={numberOfGuessAttempts} 
                onNewGame={configureNewGame} />;
  }

  return (
    <SafeAreaView style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

// https://github.com/PacktPublishing/React-Native---The-Practical-Guide