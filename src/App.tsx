import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainRouter from "./MainRouter";
import NavBar from "./NavBar";

function App() {

  return (
      <div>
        <NavBar/>
          <MainRouter/>
      </div>

  );
}

export default App;
