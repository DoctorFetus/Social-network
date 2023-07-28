import {applyMiddleware, combineReducers, compose, createStore, Store} from "redux";
import profileReducer from "./redusers/profile-reducer";
import dialogsReducer from "./redusers/dialogs-reducer";
import sidebarReducer from "./redusers/sidebar-reducer";
import usersReducer from "./redusers/users-reducer";
import {authReducer} from "./redusers/auth-reducer";
import {reducer as formReducer} from 'redux-form'
import thunkMiddleware from "redux-thunk"
import {appReducer} from "./redusers/app-reducer";


export type StoreType = ReturnType<typeof rootReducers>

const rootReducers = combineReducers({
    profilePage: profileReducer,
    usersPage: usersReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store: Store<StoreType> = createStore(rootReducers, composeEnhancers(applyMiddleware(thunkMiddleware)))


// @ts-ignore
window.__store__ = store.getState()


export default store