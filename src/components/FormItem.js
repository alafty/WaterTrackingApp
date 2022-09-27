import React from "react";
import {SafeAreaView, Text, View, TouchableOpacity, Image, StyleSheet, Button } from "react-native";
import {colors} from '../colors'
import { FilledButton } from "../components/FilledButton";
import TextInputComponent from "../components/TextInput";

export const FormItem = (props) => {
    return(
        <View>
            <Text style={styles.heading}>{props.heading}</Text>
            <TextInputComponent
            label={props.label}
            placeholder= {props.placeholder}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    heading:{
        fontSize: 24,
        alignSelf: 'center',
        color: colors.blue,
        fontWeight: '700',
        paddingBottom: 20,
        paddingTop: 30,
        shadowColor: colors.gray,
        shadowOffset: {x: 0, y: -10},
        shadowRadius: 5,
        shadowOpacity: 0.0
    }
})