import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let dialogs = [
    {id: 1, name: "user1"},
    {id: 2, name: "user2"},
    {id: 3, name: "user3"},
    {id: 4, name: "user4"},
    {id: 5, name: "user5"}
]

let messages = [
    {id: 1, message: "Hi!"},
    {id: 2, message: "How is your nothing?"},
    {id: 2, message: "Not bad"}
]

let posts = [
    {id: 1, message: "Hi, how are you?", likeCounter: 15},
    {id: 2, message: "I am dead inside", likeCounter: 25}
]

ReactDOM.render(
    <App dialogs={dialogs} messages={messages} posts={posts}/>,
  document.getElementById('root')
);