import posts, {PostsType} from "../../components/Profile/MyPosts/Posts/Posts";
import {Dispatch} from "redux";
import {profileApi} from "../../api/api";
import {v1} from "uuid";

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
    photos: PhotoType
}

type PhotoType = {
        small: string
        large: string
}

export type ProfilePageType = {
    posts: Array<PostsType>
    profile: null | UserProfileType
    status: string | null
}

const initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: "Hi, how are you?", likeCounter: 15},
        {id: v1(), message: "I am dead inside", likeCounter: 25}
    ],
    profile: null,
    status: null
}


function profileReducer(state = initialState, action: ProfilePageActionType): ProfilePageType {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostsType = {
                id: v1(),
                message: action.payload.newPost,
                likeCounter: 0
            }
            return {...state, posts: [newPost, ...state.posts]}
        case "SET-USER-PROFILE":
            return {...state, profile: action.payload.profile}
        case "SET-USER-STATUS":
            return {...state, status: action.payload.status}
        case "DELETE-POST":
            return {...state, posts: state.posts.filter(post => post.id !== action.payload.postId)}
        case "SAVE-NEW-PHOTO":
            debugger
            return {...state, profile: {...state.profile!, photos: {...action.payload.newPhoto}}}
        default:
            return state
    }
}


export type ProfilePageActionType = AddPostCreatorType
    | SetUserProfileType
    | SetProfileStatusType
    | DeletePostType
    | SavePhoto

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

type DeletePostType = ReturnType<typeof deletePost>
export const deletePost = (postId: string) => {
    return {
        type: "DELETE-POST",
        payload: {postId}
    } as const
}

type SavePhoto = ReturnType<typeof savePhoto>
const savePhoto = (newPhoto: PhotoType) => {
    return {
        type: "SAVE-NEW-PHOTO",
        payload: {newPhoto}
    } as const
}

export const getUserProfile = (userID: string) => async (dispatch: Dispatch) => {

    const response = await profileApi.getProfile(userID)
    dispatch(setUserProfile(response.data))
}

export const getUserStatus = (userId: string) => async (dispatch: Dispatch) => {
    const response = await profileApi.getStatus(userId)
    dispatch(setProfileStatus(response.data))
}

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    const response = await profileApi.updateStatus(status)
    if (!response.data.resultCode) {
        dispatch(setProfileStatus(status))
    }
}

export const updatePhoto = (newPhoto: File) => async (dispatch: Dispatch) => {
    const response = await profileApi.updatePhoto(newPhoto)
    if (!response.data.resultCode) {
        debugger
        dispatch(savePhoto(response.data.data.photos))
    }
}



export default profileReducer