import React, { useState ,useContext} from 'react';
import { EmployeeContext } from './EmployeeContext';
import  {useDispatch } from 'react-redux';
import { employeeActions } from '../Store';

const EmployeeForm = (props) => {

    // const {onSaveEmployeeData} = useContext(EmployeeContext)
    const dispatch = useDispatch();

    const [enteredName, setNameChange] = useState('');
    const [enteredDate, setDateChange] = useState('');
    const [enteredExp, setExpChange] = useState('');

    const nameChangeHandler = (event) => {
        setNameChange(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setDateChange(event.target.value);
    };

    const expChangeHandler = (event) => {
        setExpChange(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault(); //prevent from refreshing the page

        const enteredEmployeeData = {  // store data to pass to parent
            name: enteredName,
            exp: enteredExp,
            dob: new Date(enteredDate)
        };

        // props.onSaveEmployeeData(enteredEmployeeData);
        // onSaveEmployeeData(enteredEmployeeData)

        // dispatch({type:"ADD_EMP",payload:enteredEmployeeData})

        dispatch(employeeActions.addEmployee(enteredEmployeeData))

        setNameChange('');
        setExpChange('');
        setDateChange('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='flex justify-center text-center gap-5 bg-slate-950 text-yellow-50 px-4 py-4 mb-5 mx-40 my-5 rounded-xl'>
                <div className='text-center text-slate-950 bg-yellow-50 px-2 py-2 rounded-xl shadow-inner'>
                    <label>Name: </label>
                    <input type="text" onChange={nameChangeHandler} value={enteredName} /><br />
                </div>
                <div className='text-center text-slate-950 bg-yellow-50 px-2 py-2 rounded-xl shadow-inner'>
                    <label>Dob: </label>
                    <input type="date" onChange={dateChangeHandler} value={enteredDate} /><br />
                </div>
                <div className='text-center text-slate-950 bg-yellow-50 px-2 py-2 rounded-xl shadow-inner'>
                    <label>Exp: </label>
                    <input type="text" onChange={expChangeHandler} value={enteredExp} /><br />
                </div>
                <div className='hover:bg-slate-700 bg-yellow-50 rounded-xl shadow-md'>
                    <button type='submit' className='text-center text-slate-950  px-2 py-2 rounded-xl'>
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
};

export default EmployeeForm;
