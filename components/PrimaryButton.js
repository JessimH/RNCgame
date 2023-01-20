import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children, onPressFunction }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                onPress={onPressFunction}
                // IOS pressed style 
                style={({ pressed }) =>
                    pressed
                        ? [styles.pressedIOS, styles.buttonInnerContainer]
                        : styles.buttonInnerContainer
                }
                // ANDROID pressed style 
                android_ripple={{ color: '#640233' }}>
                <Text style={styles.buttonTex}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    buttonTex: {
        color: 'white',
        textAlign: 'center',
    },

    pressedIOS: {
        opacity: 0.75,
    }
})
