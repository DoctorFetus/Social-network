import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {followUserAC, setUsersAC, unfollowUserAC, UsersPageType, UserType} from "../../redux/redusers/users-reducer";
import {Dispatch} from "redux";
import Users from "./Users";

type mapStateToPropsType = UsersPageType
type mapDispatchToPropsType = {
    followUser: (userID: number) => void
    unfollowUser: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: StateType): mapStateToPropsType => ({
    users: state.usersPage.users
})

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => ({
    followUser: (userID) => {
        dispatch(followUserAC(userID))
    },
    unfollowUser: (userID) => {
        dispatch(unfollowUserAC(userID))
    },
    setUsers: (users) => {
        dispatch(setUsersAC(users))
    }
})



export default connect(mapStateToProps, mapDispatchToProps)(Users)
