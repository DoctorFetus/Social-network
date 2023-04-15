import React from 'react';
import Friend, {FriendType} from "./Friend/Friend";
import s from "./Friends.module.css"

type FriendsType = {
    friends: Array<FriendType>
}

const Friends: React.FC<FriendsType> = (props) => {

    const friendsElements = props.friends.map(f => <Friend id={f.id} name={f.name} icon={f.icon}/>)

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