import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { colors } from "../colors";

const SettingsOptions = (props) => {
    return(
        <View style= {style.container}>
            <Text style= {style.name}>{props.label}</Text>
            <FontAwesome5 name="long-arrow-alt-right" size={20} color={colors.blue}/>
        </View>
    );
}
s
const style = StyleSheet.create({
    container:{
        backgroundColor: '#ffffff',
        width: '90%',
        height: 60,
        borderRadius: 10,
        padding: 20,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        shadowColor: 'black',
        shadowOffset: {x: 2, y: -5},
        shadowRadius: 3,
        shadowOpacity: 0.1,
        alignSelf: 'center',
        marginTop: 20,
        flexDirection: 'row'
    },
    name:{
        fontSize: 18,
        fontWeight: '700'
    },
})

export default SettingsOptions;