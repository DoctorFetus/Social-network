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
import {DialogItemType} from "./components/Dialogs/Dialog/DialogItem";
import {MessageType} from "./components/Dialogs/Message/Message";
import {PostsType} from "./components/Profile/MyPosts/Posts/Posts";

type AppType = {
    state: {
        profilePage: {
            posts: Array<PostsType>
        },
        dialogsPage: {
            dialogs: Array<DialogItemType>
            messages: Array<MessageType>
        }
    }
}

const App: React.FC<AppType> = (props) => {
    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <Navbar/>
                <div className="app_wrapper_content">
                    <Route path="/profile" render={() => <Profile state={props.state.profilePage}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
