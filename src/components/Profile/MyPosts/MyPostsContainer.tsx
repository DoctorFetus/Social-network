import React from "react";
import {addPost, ProfilePageType} from "../../../redux/redusers/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {StoreType} from "../../../redux/redux-store";


type mapStateToPropsType = ProfilePageType
type mapDispatchToPropsType = {
    addPost: (newPostBody: string) => void
}

export type MypPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: StoreType): mapStateToPropsType => ({
        posts: state.profilePage["posts"],
        profile: state.profilePage["profile"],
        status: state.profilePage["status"]
})



const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts)



export default MyPostsContainer;