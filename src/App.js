import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import NavBar from './components/NavBar/NavBar';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';

const App = (props) => {

  return (
    <div className="app-wrapper" >
      <Header />
      <NavBar state={props.state.navBar} />

      <div className='app-wrapper-content'>
        <Route path="/profile" render={() => <Profile
          dispatch={props.dispatch}
          profilePage={props.state.profilePage}
        />} />
        <Route path="/dialogs" render={() => <Dialogs
          dispatch={props.dispatch}
          state={props.state.dialogsPage}
        />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/settings" render={() => <Settings />} />

      </div>
    </div>


  );


}

export default App;
