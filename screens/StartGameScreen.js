import { View, TextInput, Button, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                placeholder="00"
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize='none'
                autoCorrect={false}
            />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    )
}

export default StartGameScreen; // Export the component so it can be used in other files

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        padding: 16,
        marginHorizontal: 24,
        backgroundColor: '#72063c',
        borderRadius: 8,
        // ANDROID BOX SHADOW REACT NATIVE
        elevation: 4,
        // IOS BOX SHADOW REACT NATIVE
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomWidth: 2,
        borderBottomColor: '#ddb52f',
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})