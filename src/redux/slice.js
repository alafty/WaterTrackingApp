import { createSlice } from '@reduxjs/toolkit'
import {writeJsonFile} from 'write-json-file';


export const Slice = createSlice({
    name: 'mainSlice',
    initialState:{
        loggedInUserID: "",
        email: null,
        name: null,
        password: null,
        loggedIn: false,
        height: null,
        weight: null,
        exerciseDays: 0,
        exerciseHours: 0,
        BMI: null,
        idealIntake: 0,
        dailyGoal: null,
        dayConsumption: 0,
        cupAmount: 100,
        usersCount: 2,
        registeredUsers:[
        {
            "id" : 1,
            "email": "L",
            "name": "Mido",
            "password": ";",
            "height": "187",
            "weight": "90",
            "exerciseDays": "3",
            "exerciseHours": "2",
            "BMI": "35",
            "idealIntake": "2300",
            "dailyGoal": "2500",
            "dayConsumption": 0,
            "cupAmount": 100
        },
        {
            "id": 2,
            "email": "fido@mido",
            "name": "fido",
            "password": "12",
            "height": "190",
            "weight": "80",
            "exerciseDays": "4",
            "exerciseHours": "3",
            "BMI": "20",
            "idealIntake": "2800",
            "dailyGoal": "2900",
            "dayConsumption": 0,
            "cupAmount": 100
        }]
    },
    reducers:{
        login: (state, action) => {
            state.registeredUsers.forEach((user) => {
                if(user.email == action.payload.email && 
                user.password == action.payload.password) {
                    state.email = action.payload.email;
                    state.password = action.payload.password;
                    state.name = user.name;
                    state.height = user.height;
                    state.weight = user.weight;
                    state.exerciseDays = user.exerciseDays;
                    state.exerciseHours = user.exerciseHours;
                    state.BMI = user.BMI;
                    state.idealIntake = user.idealIntake;
                    state.dailyGoal = user.dailyGoal;
                    state.dayConsumption = user.dayConsumption;
                    state.cupAmount = user.cupAmount;
                    state.loggedIn = true;
                  }
                 })
        },
        logout: (state) => {
            state.loggedIn = false;
        },
        setPersonalData: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
        setHealthData: (state, action) => {
            state.height = action.payload.height;
            state.weight = action.payload.weight;
            state.BMI = state.weight / (state.height * state.height);
            state.idealIntake = calculateIntake(state.weight, action.payload.exerciseDays, action.payload.exerciseHours);
        },
        editGoal: (state, action) => {
            state.dailyGoal = action.payload;
            state.registeredUsers.forEach((user) => {
                if(user.email == state.email){
                    user.dailyGoal = state.dailyGoal;
                }
            })
        },
        addCup: (state) => {
            state.dayConsumption = parseInt(state.dayConsumption + state.cupAmount);
            state.registeredUsers.forEach((user) => {
                if(user.email == state.email){
                    user.dayConsumption = state.dayConsumption;
                }
            })
        },
        editAmount: (state, action) => {
            state.cupAmount = action.payload;
        },
        setDailyGoal: (state, action) => {
            console.warn(action.payload);
            state.dailyGoal= action.payload
            state.usersCount++;
            state.registeredUsers.push({
            "id": state.usersCount,
            "email": state.email,
            "name": state.name,
            "password": state.password,
            "height": state.height,
            "weight": state.weight,
            "exerciseDays": state.exerciseDays,
            "exerciseHours": state.exerciseHours,
            "BMI": state.BMI,
            "idealIntake": state.idealIntake,
            "dailyGoal": state.dailyGoal,
            "dayConsumption": 0,
            "cupAmount": 230
            })
            state.loggedIn = true; 
            
        }
    }   
})

export const {login, logout, setPersonalData, setHealthData, editAmount, editGoal, setDailyGoal, addCup} = Slice.actions;
export default Slice.reducer;

const calculateIntake = (weight, exerciseDays, exerciseHours) =>{
    return Math.floor(0.5 * weight * (((exerciseHours/0.5) * (exerciseDays/7)) * 355))
}