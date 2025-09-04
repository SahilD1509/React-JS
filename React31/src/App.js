import {NavLink,BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services';
import Contact from './components/Contact'
let App=()=>{
    let mystyles={color:"blue"}
    return <div>
            <Router>
                <nav className='navbar navbar-dark bg-dark navbar-expand-md'>
                    <NavLink to="/index" className='navbar-brand'>Logo</NavLink>
                    <div className='ms-auto'>
                        <ul className='navbar-nav'>
                            <li><NavLink to="/index" className='nav-link'>Home</NavLink></li>
                            <li><NavLink to="/about" className='nav-link'>About</NavLink></li>
                            <li><NavLink to="/services" className='nav-link'>Services</NavLink></li>
                            <li><NavLink to="/contact" className='nav-link'>Contact</NavLink></li>
                        </ul>
                    </div>
                </nav>
                <Routes>
                    <Route path="/"  element={<Home/>}/>
                    <Route path="/index"  element={<Home/>}/>
                    <Route path="/about"  element={<About/>}/>
                    <Route path="/services"  element={<Services/>} />
                    <Route path="/contact"  element={<Contact/>} />
                    <Route path="*" element={<h3 style={mystyles}>404 - Page Not Found</h3>} />
                </Routes>
            </Router>
        </div>
}
export default App;