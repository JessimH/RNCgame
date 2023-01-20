import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

const GuessLogItem = ({ roundNumber, guess }) => {
    return (
        <View style={styles.listItem}>
            <Text style={styles.listText}>#{roundNumber} : {guess}</Text>
        </View>
    )
}

export default GuessLogItem

const styles = StyleSheet.create({
    listItem: {
        borderBottomColor: Colors.primary700,
        borderBottomWidth: 2,
        textAlign: 'center',
        padding: 8,
        marginVertical: 8,
        width: '100%',
    },
    listText: {
        fontFamily: 'open-sans-bold',
        fontWeight: 'bold',
        fontSize: 18,
    }
})