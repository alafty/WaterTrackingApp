import React from "react";
import { View , Text, StyleSheet, TouchableOpacity} from "react-native";
import { colors } from "../colors";
import { FilledButton } from "../components/FilledButton";
import { FormItem } from "../components/FormItem";
import { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHealthData } from "../redux/slice";

const HealthInfoScreen = ({navigation}) => {
    const states = useSelector(state => state.reducer);
    const dispatch = useDispatch();
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [exerciseDays, setDays] = useState('');
    const [exerciseHours, setHours] = useState('');
    const [missingError, setMissingError] = useState('');

    return(
        <View style={styles.container}>
            
            <FormItem
            heading= 'How tall are you?'
            label= 'Height'
            placeholder= 'e.g. 170 (cm)' 
            onChangeText={text => {
                setHeight(text);
            }}
            numeric= {true}
            />

            <FormItem
            heading= 'How much do you weigh?'
            label= 'Weight'
            placeholder= 'e.g. 90 (kg)'
            onChangeText={text => {
                setWeight(text);
            }}
            numeric= {true}
            />
            
            <FormItem
            heading= 'How many days do you exercise per week?'
            label= 'Days'
            placeholder= 'e.g. 3 (per week)'
            onChangeText={text => {
                setDays(text);
            }}
            numeric= {true}
            />

            <FormItem
            heading= 'How many hours do you exercise per day?'
            label= 'Hours'
            placeholder= 'e.g. 1.5 (per exercising day)' 
            onChangeText={text => {
                setHours(text);
            }}
            numeric= {true}
            />

            <FilledButton 
            label= 'Next' 
            onPress= {() => {
                if(height == '' || weight == '' || exerciseDays == '' ||exerciseHours == ''){
                    setMissingError(true);
                }else{
                dispatch({
                    type: setHealthData,
                    payload: {
                        "height": height, 
                        "weight": weight,
                        "exerciseDays": exerciseDays,
                        "exerciseHours": exerciseHours
                    }
                }
                )
                navigation.navigate('goal')
            }}}
            />
            <Text
            style={styles.footnote}>
                {missingError ? "one or more fields are missing" : ""}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.white,
        height: '100%',
        padding: 20,
        paddingTop: 50
    },
    footnote:{
        fontSize: 14,
        fontWeight: '800',
        paddingHorizontal: 30,
        paddingTop: 5,
        opacity: 0.7,
        alignSelf: 'center',
        color: 'red',
    }
})

export default HealthInfoScreen;