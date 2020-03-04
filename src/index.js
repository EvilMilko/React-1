import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postsData = [
    { id: 2, message: "Bleat", likescount: 1 },
    { id: 1, message: "First post", likescount: 5 },

]

let dialogsData = [
    { id: 1, name: "Dimych1" },
    { id: 2, name: "Dimych2" },
    { id: 3, name: "Dimych3" },
    { id: 4, name: "Dimych4" },
    { id: 5, name: "Dimych5" },
]


let messagesData = [
    { id: 1, message: 'text1' },
    { id: 2, message: 'text2' },
    { id: 3, message: 'text3' },
    { id: 4, message: 'text4' },
    { id: 5, message: 'text5' },
]

ReactDOM.render(<App
    messagesData={messagesData}
    dialogsData={dialogsData}
    postsData={postsData}

/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
