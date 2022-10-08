import * as React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./HomeScreen";
import SettingsScreen from "./SettingsScreen";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { colors } from "../colors";


const Tab = createBottomTabNavigator();

const TabScreen = () => {

return(
    <Tab.Navigator>
    <Tab.Screen 
    name= "home"
    component= {HomeScreen}
    options= {{ 
        headerShown: false,
        tabBarIcon: () => <FontAwesome5 name="home"  size={30} color={colors.blue}/>}}
    />
    <Tab.Screen
    name= "Settings"
    component={SettingsScreen}
    options= {{ 
        tabBarIcon: () => <FontAwesome5 name="wrench"  size={30} color={colors.blue}/>}}
    />
    </Tab.Navigator>
    
);
}

export default TabScreen;