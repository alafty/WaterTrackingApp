import React, { useState, useEffect} from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet, Button, Modal } from "react-native";
import { TextInput } from "react-native-element-textinput";
import { useDispatch, useSelector } from "react-redux";
import {colors} from '../colors'
import { FilledButton } from "../components/FilledButton";
import { FormItem } from "../components/FormItem";
import { login, signup } from "../redux/slice";

const LandingScreen = ({navigation}) => {
    const states = useSelector(state => state.reducer);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    useEffect(() => {
        if(states.loggedIn){
            navigation.navigate('tab');
            setError(false);
        }
    }, [states.loggedIn]);

    return(
        <View>
            <View style= {styles.upperDesign}>
                <Image 
                source= {require('../../assets/app-logo.png')} 
                style= {{width: 200, height: 200}}/>
                <Text style={styles.heading}>Nero</Text>
            </View>

            <View>
            <Text 
            style={[styles.footnote, {color: 'red', fontWeight: '600', paddingTop: 0, paddingBottom: 10}]}>
                {error ? "Invalid Username or Password" : ""}
            </Text>
            <TextInput
            value={email}
            style={styles.input}
            inputStyle={styles.inputStyle}
            labelStyle={styles.labelStyle}
            placeholderStyle={styles.placeholderStyle}
            textErrorStyle={styles.textErrorStyle}
            label= {'E-Mail'}
            placeholder= {'johndoe@domain.com'}
            placeholderTextColor={colors.gray}
            focusColor= {colors.blue}
            onChangeText={text => {
                setEmail(text);
            }}
            />
            <TextInput
            value={password}
            style={styles.input}
            inputStyle={styles.inputStyle}
            labelStyle={styles.labelStyle}
            placeholderStyle={styles.placeholderStyle}
            textErrorStyle={styles.textErrorStyle}
            label= {'Password'}
            placeholder= {'**********'}
            placeholderTextColor={colors.gray}
            focusColor= {colors.blue}
            onChangeText={text => {
                setPassword(text);
            }}
            secureTextEntry= {true} 
            />

            <TouchableOpacity
            onPress={() => {
                navigation.navigate("resetpassword")
            }}
            >
                <Text style={styles.footnote}>Forgot password?</Text>
            </TouchableOpacity>

            <FilledButton 
            label= 'Login'
            onPress= {() => {
                dispatch({
                    type: login,
                    payload:{
                        email: email, 
                        password: password
                    }
                })
                if(!states.loggedIn) {
                    setError(true)
                }
                }}
            />

            <FilledButton 
            label= 'Sign Up'
            isBordered= 'true'
            onPress= {() => {
                navigation.navigate('personal')
            }
            }
            />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    upperDesign:{
        backgroundColor: colors.blue,
        height: 400,
        width: '200%',
        start: '-50%',
        borderBottomStartRadius:500,
        borderBottomEndRadius: 500,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25
    },
    popup:{
        flex: 0,
        height: 300,
        width: '70%',
        backgroundColor: colors.white,
        alignSelf: 'center',
        marginTop: 250,
        shadowColor: 'black',
        shadowOffset: {x: 5, y: 5},
        shadowRadius: 10,
        shadowOpacity: 0.4,
        borderRadius: 15

    },
    heading:{
        fontSize: 42,
        fontWeight: '200',
        color: colors.white,
        fontStyle: 'italic',
        letterSpacing: 5
    },
    footnote:{
        fontSize: 12,
        fontWeight: '300',
        paddingHorizontal: 30,
        paddingTop: 5,
        opacity: 0.7,
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
      textErrorStyle: { fontSize: 16 },
})

export default LandingScreen;