import React from "react";
import s from "./MyPosts.module.css"
import Posts from "./Posts/Posts";
import {MypPostsPropsType} from "./MyPostsContainer";
import AddPostForm, {AddPostFormType} from "./AddPostForm/AddPostForm";

const MyPosts = React.memo((props: MypPostsPropsType) => {
    let postsElements = props.posts.map(p =>
        <Posts
            profile={props.profile}
            key={p.id}
            message={p.message}
            likeCounter={p.likeCounter}
            id={p.id}/>)

    const addPost = (formData: AddPostFormType) => {
        props.addPost(formData.newPostBody)
    }

    return (
        <div className={s.container}>
            <h3 className={s.title}>Posts</h3>
            <AddPostForm onSubmit={addPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
})

export default MyPosts;