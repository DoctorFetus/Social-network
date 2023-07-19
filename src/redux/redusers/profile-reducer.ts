import {PostsType} from "../../components/Profile/MyPosts/Posts/Posts";
import {Dispatch} from "redux";
import {profileApi} from "../../api/api";

export type UserProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    aboutMe: string
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
    photos: {
        small: string
        large: string
    }
}


export type ProfilePageType = {
    posts: Array<PostsType>
    profile: null | UserProfileType
    status: string | null
}

const initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likeCounter: 15},
        {id: 2, message: "I am dead inside", likeCounter: 25}
    ],
    profile: null,
    status: null
}


function profileReducer(state = initialState, action: ProfilePageActionType): ProfilePageType {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostsType = {
                id: 5,
                message: action.payload.newPost,
                likeCounter: 0
            }
            return {...state, posts: [newPost, ...state.posts]}
        case "SET-USER-PROFILE":
            return {...state, profile: action.payload.profile}
        case "SET-USER-STATUS":
            return {...state, status: action.payload.status}
        default:
            return state
    }
}


export type ProfilePageActionType = AddPostCreatorType
    | SetUserProfileType
    | SetProfileStatusType

type AddPostCreatorType = ReturnType<typeof addPost>
export const addPost = (newPost: string) => {
    return {type: "ADD-POST", payload: {newPost}} as const
}

type SetUserProfileType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: UserProfileType) => {
    return {
        type: "SET-USER-PROFILE",
        payload: {profile}
    } as const
}
type SetProfileStatusType = ReturnType<typeof setProfileStatus>
export const setProfileStatus = (status: string) => {
    return {
        type: "SET-USER-STATUS",
        payload: {status}
    } as const
}


export const getUserProfile = (userID: string) => (dispatch: Dispatch) => {

    profileApi.getProfile(userID)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}

export const getUserStatus = (userId: string) => (dispatch: Dispatch) => {
    profileApi.getStatus(userId)
        .then((response) => {
            dispatch(setProfileStatus(response.data))
        })
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileApi.updateStatus(status)
        .then(response => {
            if (!response.data.resultCode) {
                dispatch(setProfileStatus(status))
            }
        })
}

export default profileReducer