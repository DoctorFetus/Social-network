import React from "react";
import {addPostCreator, ProfilePageType, updatePostTextCreator} from "../../../redux/redusers/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {StoreType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


type mapStateToPropsType = ProfilePageType
type mapDispatchToPropsType = {
    updateNewPostText: (newText:string) => void
    addPost: () => void
}

export type MypPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: StoreType): mapStateToPropsType => ({
        posts: state.profilePage["posts"],
        newPostText: state.profilePage["newPostText"],
        profile: state.profilePage["profile"],
        status: state.profilePage["status"]
})

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostCreator())
        },
        updateNewPostText: (newText: string) => {
            const action = updatePostTextCreator(newText)
            dispatch(action)

        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)



export default MyPostsContainer;