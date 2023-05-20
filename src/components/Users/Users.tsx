import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css'
import axios, {AxiosResponse} from 'axios'
import {UserType} from "../../redux/redusers/users-reducer";
import userPhoto from "../../assets/userPhoto.jpg"

class Users extends React.Component<UsersPropsType, {}> {

    componentDidMount() {
        axios.get<Array<UserType>>("https://social-network.samuraijs.com/api/1.0/users?count=1")
            .then((response: AxiosResponse) => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <div>
            {this.props.users.map(user => <div key={user.id} className={s.container}>
                <div className={s.ava_btn}>
                    <img className={s.avatar} src={user.photos.small ? user.photos.small : userPhoto} alt="avatar"/>
                    {user.followed
                        ? <button className={s.btn} onClick={() => this.props.unfollowUser(user.id)}>unfollow</button>
                        : <button className={s.btn} onClick={() => this.props.followUser(user.id)}>follow</button>}
                </div>
                <div className={s.userInfo}>
                    <div className={s.name_status}>
                        <div className={s.name}>{user.name}</div>
                        <div>{user.status}</div>
                    </div>
                    <div className={s.location}>
                        {'Russia'}, <br/>
                        {'Moscow'}
                    </div>
                </div>
            </div>)}
        </div>
    }
}

export default Users;