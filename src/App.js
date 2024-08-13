import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import NotFound from './pages/404';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/contact'>Contact</a></li>
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;