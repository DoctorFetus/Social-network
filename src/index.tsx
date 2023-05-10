import React from 'react';
import './index.css';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()}
                 store={store}
            />
        </BrowserRouter>,
        document.getElementById('root'));
}


rerenderEntireTree()
store.subscribe(rerenderEntireTree)