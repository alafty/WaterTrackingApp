import React from "react";
import {SafeAreaView, Text, View, TouchableOpacity, Image, StyleSheet, Button } from "react-native";
import {colors} from '../colors'
import { FilledButton } from "../components/FilledButton";
import { TextInput } from "react-native-element-textinput";

export const FormItem = (props) => {
    return(
        <View>
            <Text style={styles.heading}>{props.heading}</Text>
            <TextInput
            value={''}
            style={styles.input}
            inputStyle={styles.inputStyle}
            labelStyle={styles.labelStyle}
            placeholderStyle={styles.placeholderStyle}
            textErrorStyle={styles.textErrorStyle}
            label= {props.label}
            placeholder= {props.placeholder}
            placeholderTextColor={colors.gray}
            focusColor= {colors.blue}
            onChangeText={props.onChangeText}
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
    },
    input: {
        height: 55,
        paddingHorizontal: 12,
        borderRadius: 30,
        borderWidth: 1.5,
        borderColor: colors.blueShade,
        width: '90%',
        alignSelf: 'center',
        marginTop: 10
      },
      inputStyle: { 
          fontSize: 16,
          paddingLeft: 15,
          color: 'black'
       },
      labelStyle: {
        fontSize: 14,
        position: 'absolute',
        top: -10,
        paddingHorizontal: 4,
        marginStart: 15,
        marginLeft: -4,
        backgroundColor: colors.white
      },
      labelStyleFilled:{
          fontSize: 14,
          position: 'absolute',
          top: -10,
          paddingHorizontal: 4,
          marginStart: 15,
          marginLeft: -4,
          backgroundColor: colors.blue,
          color: colors.blue
      },
      placeholderStyle: { 
          fontSize: 16,
          paddingLeft: 15
      },
})