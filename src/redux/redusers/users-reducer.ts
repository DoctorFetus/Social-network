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
        case "FOLLOW":
            return {
                ...state, users: state.users.map(user => user.id === action.payload.userID
                    ? {...user, followed: true}
                    : user)
            }
        case "UNFOLLOW":
            return {
                ...state, users: state.users.map(user => user.id === action.payload.userID
                    ? {...user, followed: false}
                    : user)
            }
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
    FollowUserType | SetUsersType | UnfollowUserType
    | SetCurrentPageType | SetTotalUsersCountType | ToggleIsFetchingType | ToggleIsFollowingType

type FollowUserType = ReturnType<typeof followUser>
export const followUser = (userID: number) => {
    return {
        type: "FOLLOW",
        payload: {userID}
    } as const
}

type UnfollowUserType = ReturnType<typeof unfollowUser>
export const unfollowUser = (userID: number) => {
    return {
        type: "UNFOLLOW",
        payload: {userID}
    } as const
}

type SetUsersType = ReturnType<typeof setUsers>
export const setUsers = (users: Array<UserType>) => {
    return {
        type: "SET-USERS",
        payload: {users}
    } as const
}

export default usersReducer

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