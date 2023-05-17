import {combineReducers, createStore, Store} from "redux";
import profileReducer, {ProfilePageActionType, ProfilePageType} from "./redusers/profile-reducer";
import dialogsReducer, {DialogsPageActionType, DialogsPageType} from "./redusers/dialogs-reducer";
import sidebarReducer, {SidebarType} from "./redusers/sidebar-reducer";
import usersReducer, {UserReducerActionType, UsersPageType} from "./redusers/users-reducer";

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
    usersPage: UsersPageType
}

export type ActionsType = ProfilePageActionType | DialogsPageActionType | UserReducerActionType

export type StoreType = typeof store

const reducers = combineReducers({
    profilePage: profileReducer,
    usersPage: usersReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

const store: Store<StateType, ActionsType> = createStore(reducers)

export default store