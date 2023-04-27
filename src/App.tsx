import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {StateType, StoreType} from "./redux/state";

type AppType = {
    state: StateType
    store: StoreType
}

const App: React.FC<AppType> = (props) => {
    return (
        <div className="app_wrapper">
            <Header/>
            <Navbar state={props.state.sidebar}/>
            <div className="app_wrapper_content">
                <Route path="/profile" render={() => <Profile
                    store={props.store}
                    profilePage={props.state.profilePage}/>}/>

                <Route path="/dialogs" render={() => <Dialogs
                    store={props.store}
                    dialogsPage={props.state.dialogsPage}/>}/>

                <Route path="/news" render={() => <News/>}/>

                <Route path="/music" render={() => <Music/>}/>

                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
