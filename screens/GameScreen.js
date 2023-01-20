import { View, StyleSheet, Alert } from 'react-native'
import { React, useState, useEffect } from 'react'
import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import ButtonsContainer from '../components/ui/ButtonsContainer';

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    //USEEFECT IS RUN EACH TIME THE COMPONENT IS RENDERED OR THE STATE IS CHANGED
    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver()
        }
    }, [currentGuess, userNumber, onGameOver])

    const nextGuessHandler = (direction) => { // direction = 'lower' or 'higher'
        if (direction === 'lower' && currentGuess < userNumber || direction === 'higher' && currentGuess > userNumber) {
            Alert.alert(
                'Don\'t lie!',
                'You know that this is wrong...',
                [{
                    text: 'Sorry!',
                    style: 'cancel'
                }]
            )
            return;
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess
        } else {
            minBoundary = currentGuess + 1
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRndNumber)
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>Higher or Lower</InstructionText>
                <ButtonsContainer>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPressFunction={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPressFunction={nextGuessHandler.bind(this, 'higher')}>+</PrimaryButton>
                    </View>
                </ButtonsContainer>
            </Card>
            <View>
                {/* LOG ROUNDS */}
            </View>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        padding: 24,
    },
    buttonContainer: {
        flex: 1
    },
    instructionText: {
        marginBottom: 12
    }

})