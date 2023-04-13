import React from 'react';
import Friend, {FriendType} from "./Friend/Friend";

type FriendsType = {
    friends: Array<FriendType>
}

const Friends: React.FC<FriendsType> = (props) => {

    const friendsElements = props.friends.map(f => <Friend id={f.id} name={f.name} icon={f.icon}/>)

    return (
        <div>
            <h3>Friends</h3>
            {friendsElements}
        </div>
    );
};

export default Friends;