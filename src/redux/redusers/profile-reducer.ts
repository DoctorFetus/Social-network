import {PostsType} from "../../components/Profile/MyPosts/Posts/Posts";
import {ActionTypes, ProfilePageType} from "../store";


const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

function profileReducer(state: ProfilePageType, action: ActionTypes) {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likeCounter: 0
            }
            state.posts.unshift(newPost)
            state.newPostText = ""
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostCreator = (): ActionTypes => (
    {type: ADD_POST})
export const updatePostTextCreator = (text: string): ActionTypes => (
    {type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer