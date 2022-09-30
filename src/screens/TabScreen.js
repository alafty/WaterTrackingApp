import * as React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./HomeScreen";
import SettingsScreen from "./SettingsScreen";

const Tab = createBottomTabNavigator();

const TabScreen = () => {
return(
    <Tab.Navigator>
    <Tab.Screen 
    name= "Home"
    component= {HomeScreen}
    options= {{ headerShown: false }}
    />
    <Tab.Screen
    name= "Settings"
    component={SettingsScreen}
    />
    </Tab.Navigator>
);
}

export default TabScreen;