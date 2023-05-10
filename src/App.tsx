import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {ActionsType, StateType} from "./redux/redux-store";
import {Store} from "redux";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type AppType = {
    state: StateType
    store: Store<StateType, ActionsType>
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

                <Route path="/dialogs" render={() => <DialogsContainer
                store={props.store}
                />}/>

                <Route path="/news" render={() => <News/>}/>

                <Route path="/music" render={() => <Music/>}/>

                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
