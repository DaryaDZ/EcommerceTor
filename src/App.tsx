import React from 'react';
import './App.css';
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import Layout from './components/Layout';
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
          <Route path='signin' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
