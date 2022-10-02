import React from "react";
import { View, Text} from "react-native"
import { FilledButton } from "../components/FilledButton";


const HomeScreen = ({navigation}) => {
    return(
        <View>
            <Text> Home </Text>
            <FilledButton 
            label= "Back"
            destination= "signup"
            navigation= {navigation}
            />
        </View>
    )
}

export default HomeScreen;