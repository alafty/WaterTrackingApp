import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LandingScreen from './screens/LandingScreen';
import SignUpScreen from './screens/SignUpScreen';
import PersonalInfoScreen from './screens/PersonalInfoScreen'
import TabScreen from './screens/TabScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name= "landing"
        component= {LandingScreen}
        options= {{ headerShown: false}}
        />
        <Stack.Screen
        name= "signup"
        component={SignUpScreen}
        options= {{headerShown: false}}
        />
        <Stack.Screen
        name= "personal"
        component={PersonalInfoScreen}
        options= {{headerShown: false}}
        />
        <Stack.Screen
        name= "tab"
        component={TabScreen}
        options= {{ headerShown: false}}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;
