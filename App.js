import { useState } from 'react'
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from './constants/colors';

import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

const backgroundImage = require('./assets/images/background.png');

export default function App() {

  const [userNumber, setUserNumber] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [guessRound, setGuessRound] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Regular.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  const gameOverHandler = (numberOfRounds) => {
    setGameOver(true);
    setGuessRound(numberOfRounds);
  }

  const startNewGameHandler = () => {
    setUserNumber(null);
    setGuessRound(0);
    setGameOver(false);
  }

  let screen = <StartGameScreen onPressFunction={startGameHandler} />

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if (gameOver) {
    screen = <GameOverScreen userNumber={userNumber} roundsNbr={guessRound} onStartNewGame={startNewGameHandler} />
  }



  return (
    <>
      <StatusBar style='light' />
      <LinearGradient
        style={styles.rootScreen}
        colors={[Colors.primary800, Colors.accent500]}
      >
        <ImageBackground
          source={backgroundImage}
          style={styles.rootScreen}
          resizeMode='cover'
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView>
            {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient >
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.2
  }
});
