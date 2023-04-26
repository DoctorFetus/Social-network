import App from './App';
import {addPost, updateNewPostText, StateType} from "./redux/state";
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from "react-dom";
import React from "react";

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
        <App addPost={addPost} state={state} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>,
    document.getElementById('root'));
}