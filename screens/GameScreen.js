import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const GameScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Opponent's Gess</Text>
            <View>
                <Text>Higher ou Lower</Text>
            </View>
            {/* + & - buttons */}
            <View>
                {/* LOG ROUNDS */}
            </View>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12,
    }
})