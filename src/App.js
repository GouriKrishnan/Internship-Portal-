
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter as Router

import Main from './ui-component/Main';
import Work from './ui-component/Work';
import Home from './ui-component/Home';
import Signup from './ui-component/Signup';
import Login from './ui-component/Login';
import Studentdash from './ui-component/Studentdash';
import Webdevelopment from './ui-component/Webdevelopment';
 

function App() {
  return (
    <div>
      
      <Router> {/* Wrap Routes in Router */}
      <Home />
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route path='Work'element={<Work />} />
          <Route path='Home' element={<Home />} />
            <Route path='signup' element={<Signup />} />
            <Route path='login' element={<Login />} />
            <Route path='studentdash' element={<Studentdash />} />
            <Route path='Webdevelopment' element={<Webdevelopment />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
