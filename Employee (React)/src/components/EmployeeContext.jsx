import { createContext, useState, useReducer, startTransition } from "react";

export const EmployeeContext = createContext({
    items: [],
    onSaveEmployeeData: () => { }
})

function employeeReducer(state, action) {
    const updatedEmployees = [...state]

    if (action.type === 'ADD_EMP') {

        const employeeData = {
            ...action.payload,
            id: Math.random().toString()
        }

        // setEmployeesData((prevEmpData) => {
        //     console.log("Being Called");
        //     return [employeeData, ...prevEmpData];
        // });
        updatedEmployees.push(employeeData)
    }
    return updatedEmployees;
}

export default function EmployeeContextProvider({ children }) {
    const DUMP_EMPLOYEE = [
        { id: "1", name: "Anamay Dubey", dob: new Date(2023, 3, 14), exp: "7yrs" },
        { id: "2", name: "Harsh Singh", dob: new Date(2022, 9, 22), exp: "2yrs" },
        { id: "3", name: "Riya Rajput", dob: new Date(2020, 11, 13), exp: "11yrs" },
        { id: "4", name: "Aman Gupta", dob: new Date(2019, 7, 2), exp: "6yrs" },
        { id: "5", name: "Anshika Patel", dob: new Date(2019, 12, 1), exp: "1yrs" }
    ]

    const [employeesData, dispatch] = useReducer(employeeReducer, DUMP_EMPLOYEE)

    // const [employeesData, setEmployeesData] = useState(DUMP_EMPLOYEE);

    const addEmpDataHandler = emp => {
        dispatch({
            type: "ADD_EMP",
            payload: emp
        });
    };

    const contextValue = {
        items: employeesData,
        onSaveEmployeeData: addEmpDataHandler
    }

    return <EmployeeContext.Provider value={contextValue}>
        {children}
    </EmployeeContext.Provider>
}