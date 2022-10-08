import React, { useEffect } from "react";
import { View , Text, StyleSheet, TouchableOpacity} from "react-native";
import { colors } from "../colors";
import { FilledButton } from "../components/FilledButton";
import { FormItem } from "../components/FormItem";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDailyGoal } from "../redux/slice";

const DailyGoalScreen = ({navigation}) => {
    const states = useSelector(state => state.reducer);
    const dispatch = useDispatch();
    const [goal, setGoal] = useState('');

    useEffect(() => {
        if(states.loggedIn){
            navigation.navigate('tab')
       }
    }, [states.loggedIn])

        return(
        <View style={styles.container}> 
            
            
            <FormItem
            heading= 'Set your daily goal'
            label= 'Daily Goal'
            placeholder= 'e.g. 2400 (ml)'
            onChangeText={text => {
                setGoal(text);
            }}
            />
            {console.warn(goal)}
            <FilledButton 
            label= 'Next' 
            onPress= {() => {
                dispatch({
                    type: setDailyGoal,
                    payload: goal
                })
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
    },
    heading:{
        fontSize: 20,
        alignSelf: 'center',
        color: colors.blue,
        fontWeight: '400',
        paddingBottom: 20,
        paddingTop: 30,
        shadowColor: colors.gray,
        shadowOffset: {x: 0, y: -10},
        shadowRadius: 5,
        shadowOpacity: 0.0,
        textAlign: 'center'

    },
})

export default DailyGoalScreen;