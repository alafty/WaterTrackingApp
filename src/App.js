import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LandingScreen from './screens/LandingScreen';
import HealthInfoScreen from './screens/HealthInfoScreen';
import PersonalInfoScreen from './screens/PersonalInfoScreen'
import TabScreen from './screens/TabScreen';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import DailyGoalScreen from './screens/DailyGoalScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name= "landing"
        component= {LandingScreen}
        options= {{ headerShown: false}}
        />
        <Stack.Screen
        name= "personal"
        component={PersonalInfoScreen}
        options= {{headerShown: false}}
        />
        <Stack.Screen
        name= "health"
        component={HealthInfoScreen}
        options= {{headerShown: false}}
        />
        <Stack.Screen
        name= "goal"
        component={DailyGoalScreen}
        options= {{headerShown: false}}
        />
        <Stack.Screen
        name= "tab"
        component={TabScreen}
        options= {{ headerShown: false}}
        />
      </Stack.Navigator>

    </NavigationContainer>
    </Provider>
  );
};

export default App;
