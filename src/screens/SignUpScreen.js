import React from "react";
import { View , Text, StyleSheet, TouchableOpacity} from "react-native";
import { colors } from "../colors";
import { FilledButton } from "../components/FilledButton";
import { FormItem } from "../components/FormItem";

const SignUpScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            
            <FormItem
            heading= 'How tall are you?'
            label= 'Height'
            placeholder= 'e.g. 90 (kg)' />

            <FormItem
            heading= 'How much do you weigh?'
            label= 'Weight'
            placeholder= 'e.g. 170 (cm)' />
            
            <FormItem
            heading= 'How many days do you exercise per week?'
            label= 'Days'
            placeholder= 'e.g. 3 (per week)' />

            <FormItem
            heading= 'How many hours do you exercise per day?'
            label= 'Hours'
            placeholder= 'e.g. 1.5 (per exercising day)' />

            <FilledButton 
            label= 'Continue' 
            destination= "tab"
            navigation= {navigation}
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