import { View, TextInput, Button, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder="Enter a Number" />
            <PrimaryButton>Resettt</PrimaryButton>
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
    }
})