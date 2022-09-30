import React from "react";
import {View, Text, Image, StyleSheet} from 'react-native'
import { colors } from "../colors";

const UpperNotch = () => {
    return(
        <View style= {styles.container}>
            <Image 
            source={require('../../assets/app-logo.png')}
            style={{width: 40, height: 40}} />
            <Text style={styles.heading}> Nero </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.blue,
        width: '100%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomEndRadius: 50,
        borderBottomStartRadius: 50,
        flexDirection: 'row',
        paddingTop: 30
    },
    heading:{
        fontSize: 22,
        fontWeight: '300',
        color: colors.white,
        fontStyle: 'italic',
        letterSpacing: 5
    }
})

export default UpperNotch;