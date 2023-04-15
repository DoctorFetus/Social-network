import React from 'react';
import s from "./Friend.module.css"

export type FriendType = {
    id: number
    name: string
    icon: string
}

const Friend: React.FC<FriendType> = (props) => {
    return (
        <div>
            <img className={s.icon} src={props.icon} alt="ava"/>
            <div className={s.name}>
                {props.name}
            </div>
        </div>
    );
};

export default Friend;