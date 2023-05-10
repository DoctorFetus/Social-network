import React from "react";
import {addPostCreator, updatePostTextCreator} from "../../../redux/redusers/profile-reducer";
import store, {ActionsType, StateType} from "../../../redux/redux-store";
import MyPosts from "./MyPosts";
import {Store} from "redux";

type MyPostsContainerType = {
    store: Store<StateType, ActionsType>
}

const MyPostsContainer: React.FC<MyPostsContainerType> = (props) => {

    const state = store.getState()

    const addPost = () => {
        props.store.dispatch(addPostCreator())
    }

    const onPostChange = (newText: string) => {
        const action = updatePostTextCreator(newText)
        props.store.dispatch(action)
    }

    return <MyPosts
        posts={state.profilePage.posts}
        updateNewPostText={onPostChange}
        addPost={addPost}
        newPostText={state.profilePage.newPostText}/>;
}

export default MyPostsContainer;