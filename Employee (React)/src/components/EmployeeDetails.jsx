import React, { useState , useContext} from 'react';
import EmpDob from './EmpDob';
import EmployeeFilter from './EmployeeFilter';
import EmployeeList from './EmployeeList';
import { EmployeeContext } from './EmployeeContext';
import { useSelector } from 'react-redux';

const EmployeeDetails = (props) => {

  // const empCtx = useContext(EmployeeContext)

  const items = useSelector(state => state.items);

  const [filteredYear, setFilteredYear] = useState('2023')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredEmployees = items.filter(employee => {
    return employee.dob.getFullYear().toString() === filteredYear
  })

  return (
    <>
      <h1 className='text-center text-slate-950 text-3xl mb-4'>Employee Details</h1>
      <EmployeeFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <EmployeeList items={filteredEmployees} />
    </>
  );
};

export default EmployeeDetails;
