import React from 'react'
// import EmployeeForm from './EmployeeForm'

const NewEmployeeData = ({children}) => {

    return (
        <div >
            <h1 className='text-center text-slate-950 text-3xl p-5'>Employee Form</h1>
            {/* <EmployeeForm onSaveEmployeeData={saveEmployeeDataHandler}></EmployeeForm> */}
            {children}
        </div>
    )
}

export default NewEmployeeData