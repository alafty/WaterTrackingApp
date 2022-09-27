import React from "react";
import {SafeAreaView, Text, View, TouchableOpacity, Image, StyleSheet, Button } from "react-native";
import {colors} from '../colors'
import TextInputComponent from "../components/TextInput";

const LandingScreen = ({navigation}) => {
    return(
        <View>
            <View style= {styles.upperDesign}>
                <Image 
                source= {require('../../assets/app-logo.png')} 
                style= {{width: 200, height: 200}}/>
                <Text style={styles.heading}>Nero</Text>
            </View>

            <View>
            <TextInputComponent
            label= "E-Mail"
            placeholder= "example@domain.com"
            />
            <TextInputComponent
            label= "Password"
            placeholder= "**********"
            />

            <TouchableOpacity>
                <Text style={styles.footnote}>Forgot password?</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style= {styles.filledButton}
            onPress={() => {
                navigation.navigate('login')
                }
            }>
                <Text style= {styles.filledButtonText}>Login</Text>
            </TouchableOpacity> 

            <TouchableOpacity style={styles.borderedButton}>
                <Text style={styles.borderedButtonText}>Sign Up</Text>
            </TouchableOpacity>

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
    heading:{
        fontSize: 42,
        fontWeight: '200',
        color: colors.white,
        fontStyle: 'italic',
        letterSpacing: 5
    },
    filledButton:{
        width: '90%',
        backgroundColor: colors.blue,
        alignItems: 'center',
        padding: 15,
        marginTop: 10,
        borderRadius: 30,
        alignSelf: 'center',
        marginTop: 20
    },
    filledButtonText:{
        fontSize: 18, 
        color: colors.white
    },
    borderedButton:{
        width: '90%',
        borderColor: colors.blue,
        borderWidth: 1,
        alignItems: 'center',
        padding: 15,
        marginTop: 10,
        borderRadius: 30,
        alignSelf: 'center',
        marginTop: 20
    },
    borderedButtonText:{
        fontSize: 18, 
        color: colors.blue,
    },
    footnote:{
        fontSize: 12,
        fontWeight: '300',
        paddingHorizontal: 18,
        paddingTop: 5,
        opacity: 0.7,
    }
})

export default LandingScreen;