import {PostsType} from "../components/Profile/MyPosts/Posts/Posts";
import {DialogItemType} from "../components/Dialogs/Dialog/DialogItem";
import {MessageType} from "../components/Dialogs/Message/Message";
import {FriendType} from "../components/Navbar/Friends/Friend/Friend";


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

export type StoreType = {
    _rerenderEntireTree: () => void
    _state: StateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
    addMessage: () => void
    updateNewMessageText: (newText: string) => void
    subscribe: (observer: () => void) => void
    getState: () => StateType

}



export const store: StoreType = {

    _rerenderEntireTree() {},

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
    // POSTS
    addPost() {
        const newPost: PostsType = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCounter: 0
        }
        this._state.profilePage.posts.unshift(newPost)
        this._state.profilePage.newPostText = ""
        this._rerenderEntireTree()
    },

    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._rerenderEntireTree()
    },
    //  MESSAGES
    addMessage() {
        const newMessage = {
            id: 5,
            message: this._state.dialogsPage.newMessageText,
            sender: "user"
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ""
        this._rerenderEntireTree()
    },
    updateNewMessageText(newText: string) {
        this._state.dialogsPage.newMessageText = newText
        this._rerenderEntireTree()
    },

    subscribe(observer: () => void) {
        this._rerenderEntireTree = observer
    },

    getState() {
        return this._state
    }

}





export default store