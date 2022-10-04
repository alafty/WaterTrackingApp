import React from "react";
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../colors";


export const FilledButton = (props) => {
    const states = useSelector(state => state.reducer);
    const dispatch = useDispatch();

    return(
        <View>
            <TouchableOpacity 
            style={props.isBordered ? styles.borderedButton : styles.filledButton}
            onPress={props.onPress}>
                <Text 
                style={props.isBordered ? styles.borderedButtonText : styles.filledButtonText}>
                    {props.label}
                </Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    filledButton:{
        width: '90%',
        backgroundColor: colors.blue,
        alignItems: 'center',
        padding: 15,
        marginTop: 30,
        borderRadius: 30,
        alignSelf: 'center',
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
        marginTop: 20,
        borderRadius: 30,
        alignSelf: 'center',
    },
    borderedButtonText:{
        fontSize: 18, 
        color: colors.blue,
    },
})