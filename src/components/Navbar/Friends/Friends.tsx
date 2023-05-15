import React from 'react';
import Friend from "./Friend/Friend";
import s from "./Friends.module.css"
import {FriendsPropsType} from "./FriendsContainer";


const Friends: React.FC<FriendsPropsType> = (props) => {

    const friendsElements = props.friends.map(f => <Friend key={f.id} id={f.id} name={f.name} icon={f.icon}/>)

    return (
        <div>
            <div className={s.title}>Friends</div>
            <div className={s.wrapper}>
            {friendsElements}
            </div>
        </div>
    );
};

export default Friends;