import React, { useState } from "react";
import { View, Text, StyleSheet} from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { FilledButton } from "../components/FilledButton";
import Profile from "../components/Profile";
import { editGoal, logout } from "../redux/slice";
import { TextInput } from "react-native-element-textinput";
import { colors } from "../colors";
import SettingsOptions from "../components/SettingsOptions";
import Modal from 'react-native-modal'
import { TouchableOpacity } from "react-native-gesture-handler";

const SettingsScreen = ({navigation}) => {
    const states = useSelector(state => state.reducer)
    const dispatch = useDispatch();
    const[isModalVisible, setModalVisibility] = useState(false);
    const [goal, setGoal] = useState('');
    const [missingError, setMissingError] = useState('');

    return(
        <View>
            
            <Profile
            name= {states.name}
            email= {states.email}
            />

            <TouchableOpacity
            onPress = {() => {
                setModalVisibility(true);
            }}
            >
            <SettingsOptions
            label = 'Edit Daily Intake'
            />
            </TouchableOpacity>

            <Modal
            style={styles.popup}
            isVisible= {isModalVisible}
            onBackdropPress={() => setModalVisibility(false)}
            >
                    <TextInput
                    value={''}
                    style={styles.input}
                    inputStyle={styles.inputStyle}
                    labelStyle={styles.labelStyle}
                    placeholderStyle={styles.placeholderStyle}
                    textErrorStyle={styles.textErrorStyle}
                    label= "Enter Daily Intake"
                    placeholder= "e.g. 1200 (ml)"
                    placeholderTextColor={colors.gray}
                    focusColor= {colors.blue}
                    onChangeText={text =>{
                        setGoal(text)
                    }}/>

                <FilledButton 
                label= 'Confirm' 
                onPress= {() => {
                if(goal == ''){
                    setMissingError(true);
                } else{
                    dispatch({
                        type: editGoal,
                        payload: goal
                    })
                    setModalVisibility(false);
                }
                }}
                />

                <Text 
                style={styles.footnote}>
                {missingError ? "one or more fields are missing" : ""}
                 </Text>
                </Modal>
            
            <FilledButton
            label= "Log out"
            onPress= {() => {
                dispatch({
                    type: logout
                })
                navigation.navigate('landing')
            }}
            />        
        </View>
    );
}

const styles = StyleSheet.create({
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

export default SettingsScreen;