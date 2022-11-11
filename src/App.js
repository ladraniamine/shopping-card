import React from 'react';
import './App.css'
import Register from './component/register';
import Login from './component/login'
import Home from './component/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() { 

  return (
    <div className="app">  
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>      
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
