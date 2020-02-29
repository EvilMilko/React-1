import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import NavBar from './components/NavBar/NavBar';
import Dialogs from './components/Dialogs/Dialogs';

const App = () => {
  return (
    <div className="app-wrapper" >
      <Header />
      <NavBar />
      <div className='app-wrapper-content'>
        {/* <Profile /> */}
        <Dialogs />

      </div>
    </div>
  );
}

export default App;
