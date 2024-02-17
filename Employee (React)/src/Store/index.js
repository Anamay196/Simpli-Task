import {createStore} from 'redux';
import { createSlice ,configureStore } from '@reduxjs/toolkit'

const DUMP_EMPLOYEE = [
    { id: "1", name: "Anamay Dubey", dob: new Date(2023, 3, 14), exp: "7yrs" },
    { id: "2", name: "Harsh Singh", dob: new Date(2022, 9, 22), exp: "2yrs" },
    { id: "3", name: "Riya Rajput", dob: new Date(2020, 11, 13), exp: "11yrs" },
    { id: "4", name: "Aman Gupta", dob: new Date(2019, 7, 2), exp: "6yrs" },
    { id: "5", name: "Anshika Patel", dob: new Date(2019, 12, 1), exp: "1yrs" }
]

const initialState = {items:DUMP_EMPLOYEE};

const employeeSlice = createSlice({
    name: 'employee',
    initialState:initialState,
    reducers:{
        addEmployee(state,action){
            const employeeData = {
                ...action.payload,
                id: Math.random().toString()
            }
            state.items.push(employeeData)
            
        }
    }
})

// const employeeReducer = (state={items: DUMP_EMPLOYEE}, action) => {
//     const updatedEmployees = [...state.items]

//     if (action.type === 'ADD_EMP') {

//         const employeeData = {
//             ...action.payload,
//             id: Math.random().toString()
//         }
//         updatedEmployees.push(employeeData)
//         return {items:updatedEmployees};
//     }
//     return state;
        
// }

// const employeeStore = createStore(employeeReducer)

const employeeStore = configureStore({
    reducer:employeeSlice.reducer
})

export default employeeStore;
export const employeeActions = employeeSlice.actions;