import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsType} from "./MyPosts/Posts/Posts";
import {StoreType} from "../../redux/state";

type ProfileType = {
    profilePage: {
        posts: Array<PostsType>
        newPostText: string
    }
   store: StoreType
}

const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                store={props.store}
                newPostText={props.profilePage.newPostText}
            />
        </div>
    );
}

export default Profile;