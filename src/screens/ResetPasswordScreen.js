import React, { useEffect, useReducer, useState } from "react";
import {SafeAreaView, View, Text, StyleSheet} from 'react-native'
import { useDispatch } from "react-redux";
import { FilledButton } from "../components/FilledButton";
import { FormItem } from "../components/FormItem";
import { resetPassword } from "../redux/slice";

const ResetPasswordScreen = ({navigation}) => {
    const states = useReducer(state => state.reducer);
    const[isPasswordVisible, setPasswordVisibilty] = useState(false);
    const[emailConfirm, setEmailConfirm] = useState('');
    const[password, setPassword] = useState('');
    const[passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState(false)
    const dispatch = useDispatch();
    useEffect(() => {
        if(states.loggedIn){
            navigation.navigate('landing')
        }
    }, [states.loggedIn])
    return(
        <SafeAreaView>
            <FormItem
            heading= 'Enter your pre-registered E-Mail'
            label= 'E-Mail'
            placeholder= 'johndoe@domain.com' 
            onChangeText={text => {
            setEmailConfirm(text);
            }}/>
            <FilledButton
            label= 'Confirm'
            onPress= {() => {
                setPasswordVisibilty(true);
            }}
            />
            {isPasswordVisible ? 
            <View>
                <FormItem
                heading= 'Enter new password'
                label= 'Password'
                placeholder= '********' 
                onChangeText={text => {
                setPassword(text);
                }}
                secureTextEntry={true}
                />
                <FormItem
                heading= 'Confirm new password'
                label= 'Confrim Password'
                placeholder= '********' 
                onChangeText={text => {
                setPasswordConfirm(text);
                }}
                secureTextEntry={true}
                />
                <FilledButton
                label= 'Confirm'
                onPress= {() => {
                    if(password != passwordConfirm){
                        setError(true);
                    }else{
                    dispatch({
                        type: resetPassword,
                        payload: {
                            "email": emailConfirm,
                            "password": password
                        }
                    })
                    navigation.navigate('landing')
                }
                }}
            />
            { error ? 
            <Text style={styles.footnote}>
                Passwords do not match
            </Text> 
            : <View></View>
            }          
            </View>
            : <View></View>}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    footnote:{
        fontSize: 15,
        fontWeight: '600',
        paddingHorizontal: 30,
        paddingTop: 5,
        opacity: 0.7,
        color: 'red',
        paddingTop: 10
    }
})
export default ResetPasswordScreen;