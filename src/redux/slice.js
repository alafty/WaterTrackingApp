import { createSlice } from '@reduxjs/toolkit'

export const Slice = createSlice({
    name: 'mainSlice',
    initialState:{
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
        dailyGoal: 100,
        dayConsumption: 0,
        cupAmount: 100
    },
    reducers:{
        login: (state, action) => {
            if (state.email == action.payload.email
                && state.password == action.payload.password) {
                    state.email = action.payload.email;
                    state.email = action.payload.password;
                    state.loggedIn = true;
                    console.warn('yy')
                } else if (state.email == null && state.password == null){
                    state.email = action.payload.email;
                    state.password = action.payload.password; 
                    state.loggedIn = true;
                    console.warn('ff')
                }
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
            state.loggedIn = true;
        },
        addCup: (state) => {
            state.dayConsumption += state.cupAmount;
        },
        editAmount: (state, action) => {
            state.cupAmount = action.payload;
        },
        setGoal: (state, action) => {
            state.dailyGoal = action.payload;
        }

    }   
})

export const {login, logout, setPersonalData, setHealthData, editAmount, editGoal, addCup} = Slice.actions;
export default Slice.reducer;

const calculateIntake = (weight, exerciseDays, exerciseHours) =>{
    return Math.floor(0.5 * weight * (((exerciseHours/0.5) * (exerciseDays/7)) * 355))
}