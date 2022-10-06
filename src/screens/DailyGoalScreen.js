import React from "react";
import { View , Text, StyleSheet, TouchableOpacity} from "react-native";
import { colors } from "../colors";
import { FilledButton } from "../components/FilledButton";
import { FormItem } from "../components/FormItem";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editGoal } from "../redux/slice";

const DailyGoalScreen = ({navigation}) => {
    const states = useSelector(state => state.reducer);
    const dispatch = useDispatch();
    const [goal, setGoal] = useState('');

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

            <FilledButton 
            label= 'Next' 
            onPress= {() => {
                dispatch({
                    type: editGoal,
                    payload: goal
                })
                navigation.navigate('tab')
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

export default DailyGoalScreen;