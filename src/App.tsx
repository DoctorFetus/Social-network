import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {connect} from "react-redux";
import {initializeApp} from "./redux/redusers/app-reducer";
import {StoreType} from "./redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";
import {withAuthRedirect} from "./hoc/withAuthRedirect";
import {compose} from "redux";
import UsersContainer from "./components/Users/UsersContainer";

class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app_wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app_wrapper_content">
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>

                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>

                    <Route path="/news" render={() => <News/>}/>

                    <Route path="/music" render={() => <Music/>}/>

                    <Route path="/settings" render={() => <Settings/>}/>

                    <Route path="/users" render={() => <UsersContainer/>}/>

                    <Route path="/login" render={() => <LoginContainer/>}/>
                </div>
            </div>
        );
    }
}

type MapDispatchToPropsType = {
    initializeApp: () => void
}

type MapStateToPropsType = {
    initialized: boolean
}

type AppPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: StoreType): MapStateToPropsType => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App)
