import React from "react";
import {View, Text} from 'react-native'
import DropDownPicker from "react-native-dropdown-picker";

const SettingsDropdown = (props) => {
    return(
        <View>
            <DropDownPicker
            multiple= {true}
            items= {props.data}
            value={props.selected}
            open= {false}
            />
        </View>
    );
}