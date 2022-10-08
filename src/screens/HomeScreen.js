import React, { useState } from "react";
import { View, Image, Text, ScrollView, TouchableOpacity, StyleSheet} from "react-native"
import { DataCircle } from "../components/DataCircle";
import { FilledButton } from "../components/FilledButton";
import * as Progress from 'react-native-progress'
import UpperNotch from "../components/UpperNotch";
import { colors } from "../colors";
import { useDispatch, useSelector } from "react-redux";
import { addCup, editAmount } from "../redux/slice";
import Modal from 'react-native-modal'
import { add } from "react-native-reanimated";

const HomeScreen = ({navigation}) => {
    const states = useSelector(state => state.reducer);
    const dispatch = useDispatch();
    const [isModalVisible, setModalVisibility] = useState(false);

    useState(() => {

    }, [states.dayConsumption])
    return(
        <ScrollView>
            <UpperNotch/>
            <View style={{flexDirection: 'row'}}>
                <DataCircle
                title= "Ideal Intake"
                data= {states.idealIntake + ' ml'}> 
                    <Image source={require('../../assets/waterCup.png')} style= {{width: 40, height: 50}}/>
                </DataCircle>

                <DataCircle
                title= "Daily Goal"
                data= {states.dailyGoal + ' ml'} >
                    <Image source={require('../../assets/trophy.png')} style= {{width: 50, height: 50}}/>
                </DataCircle> 
            </View>
            {console.warn(states.dayConsumption)}
            {console.warn(states.dailyGoal)}
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

                <TouchableOpacity
                onPress={() =>{
                    setModalVisibility(!isModalVisible);
                }}
                >
                    <DataCircle
                    title= "Edit cup size"
                    data= {states.cupAmount + " ml"}
                    isSmall= {true}>
                        <Image source={require('../../assets/waterCupEdit.png')} style= {{width: 35, height: 45}}/>
                    </DataCircle>
                </TouchableOpacity> 
                <Modal 
                style={styles.popup}
                isVisible= {isModalVisible}
                onBackdropPress={() => setModalVisibility(false)}
                >
                    <View>
                        <TouchableOpacity 
                        style= {states.cupAmount == 100 ? styles.cupbutton : styles.none}
                        onPress= {() => {
                            dispatch({
                                type: editAmount,
                                payload: 100
                            })
                            setModalVisibility(false);
                        }}
                        >
                            <Text style={styles.cuptext}>100 ml</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style= {states.cupAmount == 230 ? styles.cupbutton : styles.none}
                        onPress= {() => {
                            dispatch({
                                type: editAmount,
                                payload: 230
                            })
                            setModalVisibility(false);
                        }}
                        >
                            <Text style={styles.cuptext}>230 ml</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style= {states.cupAmount == 460 ? styles.cupbutton : styles.none}
                        onPress= {() => {
                            dispatch({
                                type: editAmount,
                                payload: 460
                            })
                            setModalVisibility(false);
                        }}
                        >
                            <Text style={styles.cuptext}>460 ml</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>

            </View>
            <FilledButton 
            label= "Back"
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    popup:{
        flex: 0,
        height: 300,
        width: '70%',
        backgroundColor: colors.white,
        alignSelf: 'center',
        marginTop: 250

    },
    cuptext:{
        fontSize: 22,
        fontWeight: '600',
        alignSelf: 'center',
        padding: 20,
        color: colors.blue
    },
    cupbutton:{
        backgroundColor: colors.blueShade
    }
})

export default HomeScreen;