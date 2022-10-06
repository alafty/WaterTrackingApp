import * as React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./HomeScreen";
import SettingsScreen from "./SettingsScreen";
import ReminderScreen from "./ReminderScreen";
const Tab = createBottomTabNavigator();

const TabScreen = () => {
return(
    <Tab.Navigator>
    <Tab.Screen 
    name= "home"
    component= {HomeScreen}
    options= {{ headerShown: false }}
    />
    <Tab.Screen
    name= "Settings"
    component={SettingsScreen}
    />
    <Tab.Screen
    name= "reminder"
    component={ReminderScreen}
    />
    </Tab.Navigator>
    
);
}

export default TabScreen;