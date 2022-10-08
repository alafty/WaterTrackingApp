import React from "react";
import {View, Text, StyleSheet} from 'react-native'

const Profile = (props) => {
    return(
        <View style= {style.container}>
            <Text style= {style.name}>{props.name}</Text>
            <Text style= {style.email}>{props.email} </Text>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        backgroundColor: '#ffffff',
        width: '90%',
        height: 85,
        borderRadius: 10,
        padding: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        shadowColor: 'black',
        shadowOffset: {x: 2, y: -5},
        shadowRadius: 3,
        shadowOpacity: 0.1,
        alignSelf: 'center',
        marginTop: 20
    },
    name:{
        fontSize: 22,
        fontWeight: '800'
    },
    email:{
        fontSize: 14,
        fontWeight: '400',
        opacity: 0.7
    }
})

export default Profile;