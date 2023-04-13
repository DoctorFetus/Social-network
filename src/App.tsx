import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {DialogType} from "./components/Dialogs/Dialog/DialogItem";
import Message, {MessageType} from "./components/Dialogs/Message/Message";
import {PostsType} from "./components/Profile/MyPosts/Posts/Posts";

type AppType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    posts: Array<PostsType>
}

const App: React.FC<AppType> = (props) => {
    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <Navbar/>
                <div className="app_wrapper_content">
                    <Route path="/profile" render={() => <Profile posts={props.posts}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
