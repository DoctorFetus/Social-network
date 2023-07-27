import {Dispatch} from "redux";
import {usersAPI} from "../../api/api";
import {updateObjectInArray} from "../../utils/object-helpers";

export type UserType = {
    name: string
    id: number
    uniqueUrlName: null
    status: string,
    followed: boolean,
    photos: {
        small: string
        large: string
    }
}

export type UsersPageType = typeof initialState

const initialState = {
    users: [] as Array<UserType>,
    pageSize: 3,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingFilter: [] as Array<number>
}

const usersReducer = (state = initialState, action: UserReducerActionType): UsersPageType => {
    switch (action.type) {
        case "FOLLOW-UNFOLLOW":
            return {
                ...state,
                users:  updateObjectInArray<UserType>(state.users, action.payload.userID, "id", {followed: action.payload.isFollow})}
        case "SET-USERS":
            return {...state, users: [...action.payload.users]}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.payload.currentPage}
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.payload.usersCount}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.payload.isFetching}
        case "TOGGLE-IS-FOLLOWING":
            return action.payload.isFollowing
                ? {...state, followingFilter: [...state.followingFilter, action.payload.userID]}
                : {...state, followingFilter: state.followingFilter.filter(id => action.payload.userID !== id)}
        default:
            return state
    }
}

export type UserReducerActionType =
    SetUsersType | FollowUnfollowUserType
    | SetCurrentPageType | SetTotalUsersCountType | ToggleIsFetchingType | ToggleIsFollowingType

type FollowUnfollowUserType = ReturnType<typeof followUnfollowUser>
export const followUnfollowUser = (userID: number, isFollow: boolean) => {
    return {
        type: "FOLLOW-UNFOLLOW",
        payload: {userID, isFollow}
    } as const
}

type SetUsersType = ReturnType<typeof setUsers>
export const setUsers = (users: Array<UserType>) => {
    return {
        type: "SET-USERS",
        payload: {users}
    } as const
}
type SetCurrentPageType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        payload: {currentPage}
    } as const
}
type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (usersCount: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        payload: {usersCount}
    } as const
}
type ToggleIsFetchingType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: "TOGGLE-IS-FETCHING",
        payload: {isFetching}
    } as const
}

type ToggleIsFollowingType = ReturnType<typeof toggleIsFollowing>
export const toggleIsFollowing = (userID: number, isFollowing: boolean) => {
    return {
        type: "TOGGLE-IS-FOLLOWING",
        payload: {userID, isFollowing}
    } as const
}

export const requestUsers = (currentPage: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    const response = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setCurrentPage(currentPage))
    dispatch(setUsers(response.items))
    dispatch(setTotalUsersCount(response.totalCount))
    dispatch(toggleIsFetching(false))
}

export const acceptFollowUser = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFollowing(userId, true))
    const response = await usersAPI.followUser(userId)
    if (!response.resultCode) {
        dispatch(followUnfollowUser(userId, true))
    }
    dispatch(toggleIsFollowing(userId, false))
}

export const acceptUnfollowUser = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFollowing(userId, true))
    const response = await usersAPI.unfollowUser(userId)
    if (!response.resultCode) {
        dispatch(followUnfollowUser(userId, false))
    }
    dispatch(toggleIsFollowing(userId, false))
}


export default usersReducer