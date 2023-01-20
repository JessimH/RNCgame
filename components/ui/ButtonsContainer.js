import { StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'

const ButtonsContainer = ({ children }) => {
    return (
        <View style={styles.buttonsContainer}>
            {children}
        </View>
    )
}

export default ButtonsContainer

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
})