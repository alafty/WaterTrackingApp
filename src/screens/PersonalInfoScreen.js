import React from "react";
import { View , Text, StyleSheet, TouchableOpacity} from "react-native";
import { colors } from "../colors";
import { FilledButton } from "../components/FilledButton";
import { FormItem } from "../components/FormItem";

const PersonalInfoScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            
            <FormItem
            heading= 'What is your name?'
            label= 'Name'
            placeholder= 'John Doe' />

            <FormItem
            heading= 'What is your E-Mail?'
            label= 'E-Mail'
            placeholder= 'johndoe@domain.com' />
            
            <FormItem
            heading= 'Please create a password'
            label= 'Password'
            placeholder= '*********' />

            <FormItem
            heading= 'Please confirm password'
            label= 'Confirm Password'
            placeholder= '*********' />

            <FilledButton 
            label= 'Next' 
            destination= 'signup'
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

export default PersonalInfoScreen;