import React from "react";
import { View, Text, Settings} from "react-native"
import { FilledButton } from "../components/FilledButton";
import Profile from "../components/Profile";

const SettingsScreen = ({navigation}) => {
    return(
        <View>
            <Profile
            name= "Demo"
            email= "Demo@demo.com"
            />
            
        </View>
    );
}

export default SettingsScreen;