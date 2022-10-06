import React from "react";
import { View, Text, Settings, Touchable} from "react-native"
import { useDispatch, useSelector } from "react-redux";
import {Notifications} from 'react-native-notifications'
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const ReminderScreen = ({navigation}) => {
    const states = useSelector(state => state.reducer)
    const dispatch = useDispatch();

    return(
        <SafeAreaView>
            <TouchableOpacity 
            onPress={() => {
                localNotification = Notifications.postLocalNotification({
                    body: "Congrats, You Pressed Me",
                    title: "Look Here",
                    sound: "chime.aiff",
                    silent: false,
                    fireDate: new Date()
                })
            }}
            >
                <Text> Press Me </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default ReminderScreen;