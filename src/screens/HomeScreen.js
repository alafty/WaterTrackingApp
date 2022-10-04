import React from "react";
import { View, Image, ScrollView, TouchableOpacity} from "react-native"
import { DataCircle } from "../components/DataCircle";
import { FilledButton } from "../components/FilledButton";
import * as Progress from 'react-native-progress'
import UpperNotch from "../components/UpperNotch";
import { colors } from "../colors";
import { useDispatch, useSelector } from "react-redux";
import { addCup } from "../redux/slice";
import { add } from "react-native-reanimated";

const HomeScreen = ({navigation}) => {
    const states = useSelector(state => state.reducer);
    const dispatch = useDispatch();

    return(
        <ScrollView>
            <UpperNotch/>
            <View style={{flexDirection: 'row'}}>
                <DataCircle
                title= "Ideal Intake"
                data= {states.idealIntake}> 
                    <Image source={require('../../assets/waterCup.png')} style= {{width: 40, height: 50}}/>
                </DataCircle>

                <DataCircle
                title= "Daily Goal"
                data= {states.dailyGoal} >
                    <Image source={require('../../assets/trophy.png')} style= {{width: 50, height: 50}}/>
                </DataCircle> 
            </View>

            <Progress.Circle 
            color={colors.blue}
            progress= {states.dayConsumption/states.dailyGoal}
            borderColor={colors.blueShade}
            borderWidth= {5}
            thickness= {10}
            strokeCap= 'round'
            size= {300}
            showsText= {true}
            style= {{alignSelf: 'center'}}/>

            <View style={{flexDirection: 'row' , justifyContent: 'center'}}>
                <TouchableOpacity
                onPress={() => {
                    dispatch({
                        type: addCup
                    })
                }}>
                    <DataCircle
                    title= "Add cup"
                    data= {"+" + states.cupAmount + " ml"} 
                    isSmall= {true}>
                        <Image source={require('../../assets/waterCupAdd.png')} style= {{width: 35, height: 45}}/>
                    </DataCircle>
                </TouchableOpacity>

                <TouchableOpacity>
                    <DataCircle
                    title= "Edit cup size"
                    data= {states.cupAmount + " ml"}
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