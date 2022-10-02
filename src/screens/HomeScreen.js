import React from "react";
import { View, Image, ScrollView, TouchableOpacity} from "react-native"
import { DataCircle } from "../components/DataCircle";
import { FilledButton } from "../components/FilledButton";
import * as Progress from 'react-native-progress'
import UpperNotch from "../components/UpperNotch";
import { colors } from "../colors";


const HomeScreen = ({navigation}) => {
    return(
        <ScrollView>
            <UpperNotch/>
            <View style={{flexDirection: 'row'}}>
                <DataCircle
                title= "Ideal Intake"
                data= "2300 ml"> 
                    <Image source={require('../../assets/waterCup.png')} style= {{width: 40, height: 50}}/>
                </DataCircle>

                <DataCircle
                title= "Daily Goal"
                data= "2500 ml" >
                    <Image source={require('../../assets/trophy.png')} style= {{width: 50, height: 50}}/>
                </DataCircle> 
            </View>

            <Progress.Circle 
            color={colors.blue}
            progress= {0.0}
            borderColor={colors.blueShade}
            borderWidth= {5}
            thickness= {10}
            strokeCap= 'round'
            size= {300}
            showsText= {true}
            style= {{alignSelf: 'center'}}/>

            <View style={{flexDirection: 'row' , justifyContent: 'center'}}>
                <TouchableOpacity>
                    <DataCircle
                    title= "Add cup"
                    data= "+100ml" 
                    isSmall= {true}>
                        <Image source={require('../../assets/waterCupAdd.png')} style= {{width: 35, height: 45}}/>
                    </DataCircle>
                </TouchableOpacity>

                <TouchableOpacity>
                    <DataCircle
                    title= "Edit cup size"
                    data= "100ml"
                    isSmall= {true}>
                        <Image source={require('../../assets/waterCupEdit.png')} style= {{width: 35, height: 45}}/>
                    </DataCircle>
                </TouchableOpacity> 

            </View>
            <FilledButton 
            label= "Back"
            destination= "landing"
            navigation= {navigation}
            />
        </ScrollView>
    )
}

export default HomeScreen;