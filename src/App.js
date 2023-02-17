import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React,{useState, useEffect} from 'react';
import './first.css';
import Home from './Pages/Home';
import NextPg from './Pages/NextPg';


const App = () => {
  return (
   
    <div className="App">
     <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path=":id" element={<NextPg />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
