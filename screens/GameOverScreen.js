import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React from 'react'
import Title from '../components/ui/Title'
import Colors from '../constants/colors'
import PrimaryButton from '../components/ui/PrimaryButton'

const GameOverScreen = ({ roundsNbr, userNumber, onStartNewGame }) => {
    return (
        <SafeAreaView style={styles.screen}>
            <Title>Game Over !</Title>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.imageStyle}
                    source={require('../assets/images/success.png')}
                />
            </View>
            <Text style={styles.summaryText}>
                Your phone needed <Text style={styles.highlight}>{roundsNbr}</Text> rounds to guess The number <Text style={styles.highlight}>{userNumber}</Text>
            </Text>
            <PrimaryButton onPressFunction={onStartNewGame}>Start New Game</PrimaryButton>
        </SafeAreaView >
    )
}

export default GameOverScreen

const styles = StyleSheet.create({
    screen: {
        marginTop: 100,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        overflow: 'hidden',
        borderRadius: 150,
        width: 300,
        height: 300,
        borderWidth: 3,
        borderColor: Colors.primary700,
        margin: 36,
    },
    imageStyle: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 24,
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500,
    }
})