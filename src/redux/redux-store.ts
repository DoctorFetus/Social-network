import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import profileReducer from "./redusers/profile-reducer";
import dialogsReducer from "./redusers/dialogs-reducer";
import sidebarReducer from "./redusers/sidebar-reducer";
import usersReducer from "./redusers/users-reducer";
import {authReducer} from "./redusers/auth-reducer";
import {reducer as formReducer} from 'redux-form'
import thunkMiddleware from "redux-thunk"


export type StoreType = ReturnType<typeof rootReducers>

const rootReducers = combineReducers({
    profilePage: profileReducer,
    usersPage: usersReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    form: formReducer
})

const store: Store<StoreType> = createStore(rootReducers, applyMiddleware(thunkMiddleware))


// @ts-ignore
window.state = store.getState()


export default store