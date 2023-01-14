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
<<<<<<< HEAD
          <Route path='signin' element={<Login />} />
          <Route path='signup' element={<Signup />} />



=======
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
>>>>>>> 157164b4d52c8fafe3cf17a453aea2be7cbe8704
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
