import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css'

const Users = (props: UsersPropsType) => {

    if (!props.users.length) {
        props.setUsers([
            {
                id: 1,
                icon: "https://opis-cdn.tinkoffjournal.ru/mercury/359e2657.zw",
                fullName: "Dmitriy",
                status: 'I teach React',
                followed: false,
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: 2,
                icon: "https://opis-cdn.tinkoffjournal.ru/mercury/359e2657.zw",
                fullName: "Maria",
                status: 'The most beautiful in the world',
                followed: true,
                location: {city: "Moscow", country: "Russia"}
            },
            {
                id: 3,
                icon: "https://opis-cdn.tinkoffjournal.ru/mercury/359e2657.zw",
                fullName: "Sura",
                status: 'Japanese Demon of Hate',
                followed: false,
                location: {city: "Kiev", country: "Ukraine"}
            },
        ])
    }

    return (
        <div>
            {props.users.map(user => <div key={user.id} className={s.container}>
                <div className={s.ava_btn}>
                    <img className={s.avatar} src={user.icon} alt="avatar"/>
                    {user.followed
                        ? <button className={s.btn} onClick={() => props.unfollowUser(user.id)}>unfollow</button>
                        : <button className={s.btn} onClick={() => props.followUser(user.id)}>follow</button>}
                </div>
                <div className={s.userInfo}>
                    <div className={s.name_status}>
                        <div className={s.name}>{user.fullName}</div>
                        <div>{user.status}</div>
                    </div>
                    <div className={s.location}>
                        {user.location.country}, <br/>
                        {user.location.city}
                    </div>
                </div>
            </div>)}
        </div>
    );
};

export default Users;