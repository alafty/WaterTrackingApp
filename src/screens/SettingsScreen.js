import React from "react";
import { View, Text, Settings} from "react-native"
import DropDownPicker from "react-native-dropdown-picker";
import { useDispatch, useSelector } from "react-redux";
import { FilledButton } from "../components/FilledButton";
import Profile from "../components/Profile";
import { logout } from "../redux/slice";

const SettingsScreen = ({navigation}) => {
    const states = useSelector(state => state.reducer)
    const dispatch = useDispatch();

    return(
        <View>
            <Profile
            name= {states.name}
            email= {states.email}
            />
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

export default SettingsScreen;