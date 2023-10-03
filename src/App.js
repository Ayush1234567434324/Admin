import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Genre from './genre/genre';
import Cards from './cards/Cards';
import './App.css'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genre" element={<Genre/>} />
        <Route path="/admin" element={<Cards/>} />
      </Routes>
    </Router>
  );
}

export default App;
