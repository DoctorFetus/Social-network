import React, {lazy, Suspense} from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/redusers/app-reducer";
import store, {StoreType} from "./redux/store";
import Preloader from "./components/common/Preloader/Preloader";
import UsersContainer from "./components/Users/UsersContainer";
import SettingsContainer from "./components/Settings/SettingsContainer";
import Navbar from "./components/Navbar/Navbar";

const DialogsContainer = lazy(() => import("./components/Dialogs/DialogsContainer"));


class App extends React.Component<AppPropsType> {

    catchAllUnhandledErrors = (error: PromiseRejectionEvent) => {
        alert("Some error")
    }

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }
    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app_wrapper">
                <HeaderContainer/>
                {this.props.isAuth && <Navbar/>}
                <div className="app_wrapper_content">
                    <Suspense fallback={<Preloader/>}>
                        <Switch>
                            <Route exact path={"/"} render={() => <Redirect to={"/profile"}/>}/>

                            <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>

                            <Route path="/dialogs" render={() => <DialogsContainer/>}/>

                            <Route path="/settings" render={() => <SettingsContainer/>}/>

                            <Route path="/users" render={() => <UsersContainer/>}/>

                            <Route path="/login" render={() => <LoginContainer/>}/>
                            <Route path={'*'} render={() => <div>Error 404</div>}/>
                        </Switch>
                    </Suspense>
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
    isAuth: boolean
}

type AppPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: StoreType): MapStateToPropsType => ({
    initialized: state.app.initialized,
    isAuth: state.auth.isAuth
})

const AppContainer = connect(mapStateToProps, {initializeApp})(App)

const MainApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default MainApp