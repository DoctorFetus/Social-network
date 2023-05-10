import {combineReducers, createStore, Store} from "redux";
import profileReducer, {ProfilePageActionType, ProfilePageType} from "./redusers/profile-reducer";
import dialogsReducer, {DialogsPageActionType, DialogsPageType} from "./redusers/dialogs-reducer";
import sidebarReducer, {SidebarType} from "./redusers/sidebar-reducer";

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export type ActionsType = ProfilePageActionType | DialogsPageActionType

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

const store: Store<StateType, ActionsType> = createStore(reducers)

export default store