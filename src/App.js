
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Header';
import Footer from './Footer';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
