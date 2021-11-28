import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/login';
import Dashboard from './components/Dashboard';
import Faculty from './components/Faculty';
import FacultyLogin from './components/FacultyLogin';
import Register from './components/Register';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/faculty' element={<Faculty />} />
          <Route path='/facultyLogin' element={<FacultyLogin />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
