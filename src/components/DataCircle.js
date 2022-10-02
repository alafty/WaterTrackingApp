import React from "react";
import {View, Text, Image, StyleSheet} from "react-native"
import { colors } from "../colors";

export const DataCircle = (props) => {
    return(
        <View>
            <View style= {props.isSmall ? style.smallcircle : style.circle}>
                {props.children}
                <Text style= {props.isSmall ? style.smalltitle : style.title}> {props.title} </Text>
                <Text style= {props.isSmall ? style.smalldata : style.data}> {props.data} </Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    circle:{
        backgroundColor: colors.blue,
        width: 150,
        height: 150,
        borderRadius: 25,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {x: 5, y: -10},
        shadowRadius: 3,
        shadowOpacity: 0.4
    },
    smallcircle:{
        backgroundColor: colors.blueShade,
        width: 120,
        height: 120,
        borderRadius: 60,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {x: 2, y: -5},
        shadowRadius: 3,
        shadowOpacity: 0.3
    },
    title:{
        fontSize: 14,
        color: colors.blueShade,
        fontWeight: '400',
        paddingTop: 10,
        opacity: 0.7
    },
    smalltitle:{
        fontSize: 12,
        color: colors.gray,
        fontWeight: '400',
        paddingTop: 10,
        opacity: 0.7
    },
    data:{
        fontSize: 18,
        color: colors.white,
        fontWeight: '700'
    },
    smalldata:{
        fontSize: 16,
        color: colors.blue,
        fontWeight: '700'
    },
    image:{
        width: 50, 
        height: 50
    },
    smallimage:{
        width: 35,
        height: 35
    }

})