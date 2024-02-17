import React from 'react';
import EmpDob from './EmpDob';

const EmployeeList = (props) => {
    const { items } = props;

    if (items.length === 0) {
        return (
            <div className='flex justify-center text-center bg-slate-950 text-yellow-50 px-4 py-4 mb-2 mx-40 my-5 rounded-xl'>
                <h2>No Data Found!</h2>
            </div>
        );
    }

    const filterContent = items.map((emp) => (
        <div className='flex justify-center text-center bg-slate-950 text-yellow-50 shadow-2xl px-4 py-4 mb-2 mx-40 my-5 rounded-xl' key={emp.id}>
            <ul>
                <li className='text-xl'>{emp.name}</li>
                <li><EmpDob DOB={emp.dob}></EmpDob></li>
                <li>Experience- {emp.exp}</li>
            </ul>
        </div>
    ));

    return filterContent;
}

export default EmployeeList;
