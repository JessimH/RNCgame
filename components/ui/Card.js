import { StyleSheet, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

const Card = ({ children }) => {
    return (
        <View style={styles.inputContainer}>
            {children}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 24,
        padding: 16,
        marginHorizontal: 24,
        backgroundColor: Colors.primary700,
        borderRadius: 8,
        // ANDROID BOX SHADOW REACT NATIVE
        elevation: 4,
        // IOS BOX SHADOW REACT NATIVE
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
})