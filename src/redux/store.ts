import {PostsType} from "../components/Profile/MyPosts/Posts/Posts";
import {DialogItemType} from "../components/Dialogs/Dialog/DialogItem";
import {MessageType} from "../components/Dialogs/Message/Message";
import {FriendType} from "../components/Navbar/Friends/Friend/Friend";
import profileReducer from "./redusers/profile-reducer";
import dialogsReducer from "./redusers/dialogs-reducer";
import sidebarReducer from "./redusers/sidebar-reducer";

export type ProfilePageType =  {
    posts: Array<PostsType>
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    newMessageText: string
}

export type SidebarType = {
    friends: Array<FriendType>
}


export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export type AddPostActionType = {
    type: "ADD-POST",
}

export type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT",
    newText: string
}

 export type AddMessageActionType = {
    type: "ADD-MESSAGE",
}
 export type UpdateMessageTextActionType = {
    type: "UPDATE-NEW-MESSAGE-BODY",
    newMessageText: string
}

export type ActionTypes = AddPostActionType | UpdateNewPostTextActionType | AddMessageActionType | UpdateMessageTextActionType

export type StoreType = {
    _callSubscriber: () => void
    _state: StateType
    subscribe: (observer: () => void) => void
    getState: () => StateType,
    dispatch: (action: ActionTypes) => void

}



export const store: StoreType = {

    _state: <StateType>{
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likeCounter: 15},
                {id: 2, message: "I am dead inside", likeCounter: 25}
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [
                {id: 1, icon: "https://opis-cdn.tinkoffjournal.ru/mercury/359e2657.zw", name: "Sura"},
                {id: 2, icon: "https://opis-cdn.tinkoffjournal.ru/mercury/359e2657.zw", name: "Asin"},
                {id: 3, icon: "https://opis-cdn.tinkoffjournal.ru/mercury/359e2657.zw", name: "Gebu"},
                {id: 4, icon: "https://opis-cdn.tinkoffjournal.ru/mercury/359e2657.zw", name: "Nun"},
                {id: 5, icon: "https://opis-cdn.tinkoffjournal.ru/mercury/359e2657.zw", name: "Seciro"}
            ],
            messages: [
                {id: 1, message: "Hi!", sender: "user"},
                {id: 2, message: "How is your nothing?", sender: "user"},
                {id: 3, message: "Not bad", sender: "friend"},
                {id: 4, message: "Wow! That is work!", sender: "user"}
            ],
            newMessageText: ""
        },
        sidebar: {
            friends: [
                {id: 1, name: "Sura", icon: "https://opis-cdn.tinkoffjournal.ru/mercury/359e2657.zw"},
                {id: 2, name: "Asin", icon: "https://opis-cdn.tinkoffjournal.ru/mercury/359e2657.zw"},
                {id: 3, name: "Gebu", icon: "https://opis-cdn.tinkoffjournal.ru/mercury/359e2657.zw"}
            ]
        }
    },
    _callSubscriber() {},
    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber()

    }
}


export default store