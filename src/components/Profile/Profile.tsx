import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsType} from "./MyPosts/Posts/Posts";
import {ActionTypes} from "../../redux/state";

type ProfileType = {
    profilePage: {
        posts: Array<PostsType>
        newPostText: string
    }
    dispatch: (action: ActionTypes) => void
}

const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                dispatch={props.dispatch}
                newPostText={props.profilePage.newPostText}
            />
        </div>
    );
}

export default Profile;