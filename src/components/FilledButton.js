import React from "react";
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { colors } from "../colors";

export const FilledButton = (props) => {
    return(
        <View>
            <TouchableOpacity 
            style={props.isBordered ? styles.borderedButton : styles.filledButton}
            onPress={() => {
                props.navigation.navigate(props.destination)
                }
            }>
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
        marginTop: 10,
        borderRadius: 30,
        alignSelf: 'center',
        marginTop: 30
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
})