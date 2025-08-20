import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Navbar/navbar';
import Employees from './Employees/employees';
import Users from './Users/users';

const App=()=>{
  return <div>
    <hr/>
    <Navbar/>
    <Employees/>
    <Users/>
  </div>
}

export default App;