import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  return (
    <div className="app-wrapper" >
      <Header />
      <NavBar/>
      <Profile />

    </div>
  );
}

export default App;
