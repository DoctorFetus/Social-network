import usersReducer, {followUnfollowUser, UsersPageType} from "../redux/redusers/users-reducer";

let state: UsersPageType

beforeEach(() => {
    state = {
        users: [
            {
                name: 'Masha',
                followed: false,
                photos: {small: null, large: null},
                status: 'loved 1',
                id: 1,
                uniqueUrlName: null
            },
            {
                name: 'Mashenka',
                followed: false,
                photos: {small: null, large: null},
                status: 'loved 2',
                id: 2,
                uniqueUrlName: null
            },
            {
                name: 'Mashulya',
                followed: true,
                photos: {small: null, large: null},
                status: 'loved 3',
                id: 3,
                uniqueUrlName: null
            },
            {
                name: 'Maria',
                followed: true,
                photos: {small: null, large: null},
                status: 'loved 4',
                id: 4,
                uniqueUrlName: null
            },

        ],
        pageSize: 7,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingFilter: []
    }
})

describe('user-reducer test', () => {
    it('followed successfully', () => {

        const newState = usersReducer(state, followUnfollowUser(state.users[1].id, true))

        expect(newState.users[1].followed).toBeTruthy()
        expect(newState.users[0].followed).toBeFalsy()

    })

    it('unfollowed successfully', () => {

        const newState = usersReducer(state, followUnfollowUser(state.users[2].id, false))

        expect(newState.users[3].followed).toBeTruthy()
        expect(newState.users[2].followed).toBeFalsy()
    })
})