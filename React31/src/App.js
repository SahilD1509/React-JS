import React from 'react'
import Navbar from './Navbar/navbar';
import {BrowserRouter as Router} from 'react-router-dom'
const App = () => {
  return <div>
          
          <Router>
              <Navbar/>
          </Router>
          
        </div>
}
export default App;