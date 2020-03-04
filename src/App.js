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
import { Route, BrowserRouter } from 'react-router-dom';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper" >
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Route path="/profile" render={() => <Profile postsData={props.postsData}/>} />
          <Route path="/dialogs" render={() => <Dialogs messagesData={props.messagesData} dialogsData={props.dialogsData}/>} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />

        </div>
      </div>
    </BrowserRouter>
  );

}

export default App;
