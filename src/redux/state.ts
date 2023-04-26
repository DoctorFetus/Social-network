import {PostsType} from "../components/Profile/MyPosts/Posts/Posts";
import {DialogItemType} from "../components/Dialogs/Dialog/DialogItem";
import {MessageType} from "../components/Dialogs/Message/Message";
import {FriendType} from "../components/Navbar/Friends/Friend/Friend";
import {rerenderEntireTree} from "../render";

export type StateType = {
    profilePage: {
        posts: Array<PostsType>
        newPostText: string
    },
    dialogsPage: {
        dialogs: Array<DialogItemType>
        messages: Array<MessageType>
    },
    sidebar: {
        friends: Array<FriendType>
    }
}



let state: StateType = {
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
        ]
    },
    sidebar: {
        friends: [
            {id: 1, name: "Sura", icon:"https://opis-cdn.tinkoffjournal.ru/mercury/359e2657.zw"},
            {id: 2, name: "Asin", icon:"https://opis-cdn.tinkoffjournal.ru/mercury/359e2657.zw"},
            {id: 3, name: "Gebu", icon:"https://opis-cdn.tinkoffjournal.ru/mercury/359e2657.zw" }
        ]
    }
}

export const addPost = () => {
    const newPost: PostsType = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCounter: 0
    }
    state.profilePage.posts.unshift(newPost)
    state.profilePage.newPostText = ""
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export default state