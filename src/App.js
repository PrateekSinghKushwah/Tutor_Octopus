
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';

import About from './Components/About';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Dashboard';
import DahsboradHome from './Component/DahsboradHome';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Dashboard' element={<Dashboard/>} />
        <Route path='/DahsboradHome' element={<DahsboradHome/>} />
      </Routes>
    
      
    </div>
  );
}

export default App;
