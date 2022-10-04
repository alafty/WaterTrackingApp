import React from "react";
import { View , Text, StyleSheet, TouchableOpacity} from "react-native";
import { colors } from "../colors";
import { FilledButton } from "../components/FilledButton";
import { FormItem } from "../components/FormItem";
import { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../redux/slice";

const SignUpScreen = ({navigation}) => {
    const states = useSelector(state => state.reducer);
    const dispatch = useDispatch();
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [exerciseDays, setDays] = useState('');
    const [exerciseHours, setHours] = useState('');

    return(
        <View style={styles.container}>
            
            <FormItem
            heading= 'How tall are you?'
            label= 'Height'
            placeholder= 'e.g. 90 (kg)' 
            onChangeText={text => {
                setHeight(text);
            }}
            />

            <FormItem
            heading= 'How much do you weigh?'
            label= 'Weight'
            placeholder= 'e.g. 170 (cm)'
            onChangeText={text => {
                setWeight(text);
            }}
            />
            
            <FormItem
            heading= 'How many days do you exercise per week?'
            label= 'Days'
            placeholder= 'e.g. 3 (per week)'
            onChangeText={text => {
                setDays(text);
            }}
            />

            <FormItem
            heading= 'How many hours do you exercise per day?'
            label= 'Hours'
            placeholder= 'e.g. 1.5 (per exercising day)' 
            onChangeText={text => {
                setHours(text);
            }}
            />

            <FilledButton 
            label= 'Continue' 
            onPress= {() => {
                dispatch({
                    type: signup,
                    payload: {
                        "height": height, 
                        "weight": weight,
                        "exerciseDays": exerciseDays,
                        "exerciseHours": exerciseHours
                    }
                }
                )
                navigation.navigate('tab')
                console.warn(states);
            }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.white,
        height: '100%',
        padding: 20,
        paddingTop: 50
    }
})

export default SignUpScreen;