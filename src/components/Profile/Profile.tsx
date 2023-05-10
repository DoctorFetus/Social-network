import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsType} from "./MyPosts/Posts/Posts";
import {Store} from "redux";
import {ActionsType, StateType} from "../../redux/redux-store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfileType = {
    profilePage: {
        posts: Array<PostsType>
        newPostText: string
    }
    store: Store<StateType, ActionsType>
}

const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
}

export default Profile;