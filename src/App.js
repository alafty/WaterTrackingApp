import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LandingScreen from './screens/LandingScreen';
import HomeScreen from './screens/HomeScreen';
import SignUpScreen from './screens/SignUpScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name= "login"
        component= {LandingScreen}
        options= {{ headerShown: false}}
        />
        <Stack.Screen
        name= "home"
        component={HomeScreen}
        options= {{ headerShown: false}}
        />
        <Stack.Screen
        name= "signup"
        component={SignUpScreen}
        options= {{headerShown: false}}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;
