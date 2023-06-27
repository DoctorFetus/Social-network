import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import profileReducer, {ProfilePageType} from "./redusers/profile-reducer";
import dialogsReducer, {DialogsPageType} from "./redusers/dialogs-reducer";
import sidebarReducer, {SidebarType} from "./redusers/sidebar-reducer";
import usersReducer, {UsersPageType} from "./redusers/users-reducer";
import {authReducer, AuthType} from "./redusers/auth-reducer";
import thunkMiddleware from "redux-thunk"

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
    usersPage: UsersPageType
    auth: AuthType

}
export type StoreType = ReturnType<typeof rootReducers>

const rootReducers = combineReducers({
    profilePage: profileReducer,
    usersPage: usersReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    auth: authReducer
})

const store: Store<StoreType> = createStore(rootReducers, applyMiddleware(thunkMiddleware))


// @ts-ignore
window.state = store.getState()


export default store