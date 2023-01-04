import React from 'react';
import {Route,Routes} from 'react-router-dom'
import Navbar from './Components/Nabvar/Navbar';
import LandingPage from './Components/LandingPage/Landingpage';
import Search from './Components/SearchPage/SearchPage';
import Login from './Components/loginPage/login';
function App() {
  return (
    <div className="App">
     
      <Navbar />
      <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route exact path='/Search' element={<Search />} /> 
          <Route exact path='/Login' element={<Login />} /> 
      </Routes>
    </div>
  );
}

export default App;
