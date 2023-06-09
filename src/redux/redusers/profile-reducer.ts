import {PostsType} from "../../components/Profile/MyPosts/Posts/Posts";

export type UserProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
}


export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    profile: null | UserProfileType
}

const initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likeCounter: 15},
        {id: 2, message: "I am dead inside", likeCounter: 25}
    ],
    newPostText: "",
    profile: null
}


function profileReducer(state = initialState, action: ProfilePageActionType): ProfilePageType {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likeCounter: 0
            }
            return state.newPostText
                ? {...state, newPostText: "", posts: [newPost, ...state.posts]}
                : state
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText
            return {...state, newPostText: action.newText}
        case "SET-USER-PROFILE":
            console.log(action.payload.profile)
            return {...state, profile: action.payload.profile}
        default:
            return state
    }
}


export type ProfilePageActionType = AddPostCreatorType | UpdatePostTextCreatorType | setUserProfileType

type AddPostCreatorType = ReturnType<typeof addPostCreator>
export const addPostCreator = () => {
    return {type: "ADD-POST"} as const
}
type UpdatePostTextCreatorType = ReturnType<typeof updatePostTextCreator>
export const updatePostTextCreator = (text: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: text
    } as const
}
type setUserProfileType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: UserProfileType) => {
    return {
        type: "SET-USER-PROFILE",
        payload: {profile}
    } as const
}



export default profileReducer