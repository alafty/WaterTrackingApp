import React from "react";
import { View, Text, Settings} from "react-native"
import DropDownPicker from "react-native-dropdown-picker";
import { useSelector } from "react-redux";
import { FilledButton } from "../components/FilledButton";
import Profile from "../components/Profile";

const SettingsScreen = ({navigation}) => {
    const states = useSelector(state => state.reducer)

    return(
        <View>
            <Profile
            name= {states.name}
            email= {states.email}
            />
            {console.warn(states.email)}
        </View>
    );
}

export default SettingsScreen;