import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsType} from "./MyPosts/Posts/Posts";

type ProfileType = {
    profilePage: {
        posts: Array<PostsType>
        newPostText: string
    }
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts addPost={props.addPost}
                     newPostText={props.profilePage.newPostText}
                     posts={props.profilePage.posts}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
}

export default Profile;