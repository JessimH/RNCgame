import { useState } from 'react';
import { View, TextInput, Alert, StyleSheet } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import ButtonsContainer from '../components/ui/ButtonsContainer';

function StartGameScreen({ onPressFunction }) {

    const [enteredNumber, setEnteredNumber] = useState('');

    const numberInputHandler = (enteredNumber) => {
        setEnteredNumber(enteredNumber)
    }

    const resetInputHandler = () => {
        setEnteredNumber('');
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            // Show Alert
            Alert.alert(
                'Invalid number!',
                'Number has to be a number between 1 and 99.',
                [{
                    text: 'Okay',
                    style: 'destructive',
                    onPress: resetInputHandler
                }]
            )
            return
        }

        onPressFunction(chosenNumber);
    }

    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Enter Number:</InstructionText>
                <TextInput
                    style={styles.numberInput}
                    placeholder="00"
                    maxLength={2}
                    keyboardType="number-pad"
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={enteredNumber}
                    onChangeText={numberInputHandler}
                />
                <ButtonsContainer>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPressFunction={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPressFunction={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </ButtonsContainer>
            </Card>
        </View>
    )
}

export default StartGameScreen; // Export the component so it can be used in other files

const styles = StyleSheet.create({
    rootContainer: {
        marginTop: 100,
        margin: 24,
        alignItems: 'center',
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomWidth: 2,
        borderBottomColor: Colors.accent500,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonContainer: {
        flex: 1
    }
})
