import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../constants/colors";

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
                android_ripple={{ color: Colors.primary600 }}>
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
        backgroundColor: Colors.primary500,
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
