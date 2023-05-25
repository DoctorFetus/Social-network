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
    currentPage: 2
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
        default:
            return state
    }
}

export type UserReducerActionType =
    FollowUserType | SetUsersType | UnfollowUserType | SetCurrentPageType | SetTotalUsersCountType

type FollowUserType = ReturnType<typeof followUserAC>
export const followUserAC = (userID: number) => {
    return {
        type: "FOLLOW",
        payload: {userID}
    } as const
}

type UnfollowUserType = ReturnType<typeof unfollowUserAC>
export const unfollowUserAC = (userID: number) => {
    return {
        type: "UNFOLLOW",
        payload: {userID}
    } as const
}

type SetUsersType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: "SET-USERS",
        payload: {users}
    } as const
}

export default usersReducer

type SetCurrentPageType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        payload: {currentPage}
    } as const
}
type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC = (usersCount: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        payload: {usersCount}
    } as const
}

