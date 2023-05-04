import {PostsType} from "../components/Profile/MyPosts/Posts/Posts";
import {DialogItemType} from "../components/Dialogs/Dialog/DialogItem";
import {MessageType} from "../components/Dialogs/Message/Message";
import {FriendType} from "../components/Navbar/Friends/Friend/Friend";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"


export type StateType = {
    profilePage: {
        posts: Array<PostsType>
        newPostText: string
    },
    dialogsPage: {
        dialogs: Array<DialogItemType>
        messages: Array<MessageType>
        newMessageText: string
    },
    sidebar: {
        friends: Array<FriendType>
    }
}

 type AddPostActionType = {
    type: "ADD-POST",
}

 type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT",
    newText: string
}
 type AddMessageActionType = {
    type: "ADD-MESSAGE",
}
 type UpdateMessageTextActionType = {
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
        switch (action.type) {
            case ADD_POST:
                const newPost: PostsType = {
                    id: 5,
                    message: this._state.profilePage.newPostText,
                    likeCounter: 0
                }
                this._state.profilePage.posts.unshift(newPost)
                this._state.profilePage.newPostText = ""
                this._callSubscriber()
                break
            case UPDATE_NEW_POST_TEXT:
                this._state.profilePage.newPostText = action.newText
                this._callSubscriber()
                break
            case ADD_MESSAGE:
                const newMessage = {
                    id: 5,
                    message: this._state.dialogsPage.newMessageText,
                    sender: "user"
                }
                this._state.dialogsPage.messages.push(newMessage)
                this._state.dialogsPage.newMessageText = ""
                this._callSubscriber()
                break
            case UPDATE_NEW_MESSAGE_BODY:
                this._state.dialogsPage.newMessageText = action.newMessageText
                this._callSubscriber()
                break
        }

    }
}

export const addPostCreator = (): AddPostActionType => ({type: ADD_POST})
export const updatePostTextCreator = (text: string): UpdateNewPostTextActionType => (
    {type: UPDATE_NEW_POST_TEXT, newText: text})
export const sendMessageCreator = (): AddMessageActionType => (
    {type: ADD_MESSAGE})
export const updateMessageBodyCreator = (text: string): UpdateMessageTextActionType => (
    {type: UPDATE_NEW_MESSAGE_BODY, newMessageText: text})



export default store