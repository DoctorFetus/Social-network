import {StoreType} from "../store";

export const getUsers = (state: StoreType) => state.usersPage.users

export const getPagesSelector = (state: StoreType) => state.usersPage.pageSize

export const getTotalUsersCount = (state: StoreType) => state.usersPage.totalUsersCount

export const getCurrentPage = (state: StoreType) => state.usersPage.currentPage

export  const getIsFetching = (state: StoreType) => state.usersPage.isFetching

export  const getFollowingFilter = (state: StoreType) => state.usersPage.followingFilter

export const getUsersFilter = (state: StoreType) => state.usersPage.filter