import React from "react";
import {View, Text, StyleSheet} from 'react-native'

const SettingsOptions = (props) => {
    return(
        <View style= {style.container}>
            <Text style= {style.name}>{props.label}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        backgroundColor: '#ffffff',
        width: '90%',
        height: 60,
        borderRadius: 10,
        padding: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        shadowColor: 'black',
        shadowOffset: {x: 2, y: -5},
        shadowRadius: 3,
        shadowOpacity: 0.1,
        alignSelf: 'center',
        marginTop: 20
    },
    name:{
        fontSize: 18,
        fontWeight: '700'
    },
})

export default SettingsOptions;