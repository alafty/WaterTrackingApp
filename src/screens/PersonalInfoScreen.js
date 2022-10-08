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
    const [passwordError, setPasswordError] = useState('');
    const [missingError, setMissingError] = useState('');

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
            secureTextEntry= {true} 
            />

            <FormItem
            heading= 'Please confirm password'
            label= 'Confirm Password'
            placeholder= '*********' 
            onChangeText={text => {
                setConfirm(text);
            }}
            secureTextEntry= {true} 
            />

            <FilledButton 
            label= 'Next' 
            onPress={() => {
                if(name == '' || email == '' || password == '' || confirm == ''){
                    setMissingError(true);
                }
                else if(password != confirm){
                    setPasswordError(true);
                    setMissingError(false);
                }else{
                    dispatch({
                        type: setPersonalData,
                        payload: {
                            "name": name,
                            "email": email,
                            "password": password
                        }
                    })
                    navigation.navigate('health');
                    setPasswordError(false)
                    setMissingError(false)
                }
            }}
            />
            <Text 
            style={[styles.footnote, {color: 'red', fontWeight: '700', paddingTop: 10, paddingBottom: 10}]}>
                {passwordError ? "passwords do not match" : ""}
            </Text>
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

export default PersonalInfoScreen;