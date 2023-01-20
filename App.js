import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';

const backgroundImage = require('./assets/images/background.png');

export default function App() {
  return (
    <LinearGradient
      style={styles.rootScreen}
      colors={['#4e0329', '#ddb52f']}
    >
      <ImageBackground
        source={backgroundImage}
        style={styles.rootScreen}
        resizeMode='cover'
        imageStyle={styles.backgroundImage}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient >
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
