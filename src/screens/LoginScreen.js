import React from "react";
import { SafeAreaView , Text, TouchableOpacity} from "react-native";

const LoginScreen = ({navigation}) => {
    return(
        <SafeAreaView>
            <Text>Login</Text>
            <TouchableOpacity
            onPress={() => {
                navigation.navigate('landing')
                }
            }>
                <Text> back </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default LoginScreen;