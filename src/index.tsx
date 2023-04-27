import React from 'react';
import './index.css';
import store from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()}
                 store={store}
                 // addPost={store.addPost}
                 // updateNewPostText={store.updateNewPostText}
                 // addMessage={store.addMessage}
                 // updateNewMessageText={store.updateNewMessageText}

            />
        </BrowserRouter>,
        document.getElementById('root'));
}


rerenderEntireTree()
store.subscribe(rerenderEntireTree)