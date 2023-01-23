import { View, Text, StyleSheet, Platform } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

function Title({ children }) {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}
export default Title

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        // borderWidth: Platform.OS === 'ios' ? 2 : 0,
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
        borderRadius: 8,
        maxWidth: '80%',
    }
})

