import React, { useReducer, useState } from "react";
import { View , Text, StyleSheet, TouchableOpacity} from "react-native";
import { useDispatch } from "react-redux";
import { colors } from "../colors";
import { FilledButton } from "../components/FilledButton";
import { FormItem } from "../components/FormItem";
import { setPersonalData } from "../redux/slice";

const PersonalInfoScreen = ({navigation}) => {
    const states = useReducer(state => state.reducer);
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    return(
        <View style={styles.container}>
            
            <FormItem
            heading= 'What is your name?'
            label= 'Name'
            placeholder= 'John Doe'
            onChangeText={text => {
                setName(text);
            }} />

            <FormItem
            heading= 'What is your E-Mail?'
            label= 'E-Mail'
            placeholder= 'johndoe@domain.com' 
            onChangeText={text => {
                setEmail(text);
            }}
            />
            
            <FormItem
            heading= 'Please create a password'
            label= 'Password'
            placeholder= '*********'
            onChangeText={text => {
                setPassword(text);
            }}
            />

            <FormItem
            heading= 'Please confirm password'
            label= 'Confirm Password'
            placeholder= '*********' 
            onChangeText={text => {
                setConfirm(text);
            }}
            />

            <FilledButton 
            label= 'Next' 
            onPress={() => {
                if(password != confirm){
                    {/*display error*/}
                }else{
                    dispatch({
                        type: setPersonalData,
                        payload: {
                            "name": name,
                            "email": email,
                            "password": password
                        }
                    })
                    navigation.navigate('signup');
                }
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

export default PersonalInfoScreen;