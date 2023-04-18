import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsType} from "./MyPosts/Posts/Posts";

type ProfileType = {
    state: {
        posts: Array<PostsType>
    }
    addPost: (postMessage: string) => void
}

const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts addPost={props.addPost} posts={props.state.posts}/>
        </div>
    );
}

export default Profile;