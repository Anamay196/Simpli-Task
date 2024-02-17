import { useState } from 'react';
import NewEmployeeData from './components/NewEmployeeData';
import EmployeeDetails from './components/EmployeeDetails';
import EmployeeForm from './components/EmployeeForm';
import { EmployeeContext } from './components/EmployeeContext';
import EmployeeContextProvider from './components/EmployeeContext';


function App() {
  

  

  return (
    <EmployeeContextProvider>
      <div className='bg-yellow-50 min-h-screen text-center'>
        <NewEmployeeData >
          <EmployeeForm />
        </NewEmployeeData>
        <EmployeeDetails/>
      </div>
    </EmployeeContextProvider>
  );
}

export default App;
