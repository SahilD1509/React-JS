import {Link,BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from '../public/components/Home';
import About from '../public/components/About';
let App=()=>{
    return <div>
            <Router>
                <nav>
                    <Link to="/index">Logo</Link>
                    <div>
                        <ul>
                            <li><Link to="/index">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </nav>
                <Routes>
                    <Route path="/"  element={<Home/>}/>
                    <Route path="/index"  element={<Home/>}/>
                    <Route path="/about"  element={<About/>}/>
                </Routes>
            </Router>
        </div>
}
export default App;