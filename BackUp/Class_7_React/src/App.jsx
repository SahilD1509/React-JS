import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './navbar/Navbar';
import Employees from './employees/Employees';
const App=()=>{
  return <div>
    <h3>component app </h3>
    <hr/>
    <Navbar/>
    <Employees/>
  </div>
}

export default App;