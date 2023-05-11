import React from "react";
import {addPostCreator, updatePostTextCreator} from "../../../redux/redusers/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {

    return <StoreContext.Consumer>
        {
        (store) => {

            const addPost = () => {
                store?.dispatch(addPostCreator())
            }
            const onPostChange = (newText: string) => {
                const action = updatePostTextCreator(newText)
                store?.dispatch(action)
            }

            if (!store) return
            const state = store.getState()
            return <MyPosts
                    posts={state.profilePage.posts}
                    updateNewPostText={onPostChange}
                    addPost={addPost}
                    newPostText={state.profilePage.newPostText}/>;
        }
    }
    </StoreContext.Consumer>
}



export default MyPostsContainer;