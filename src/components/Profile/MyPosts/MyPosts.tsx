import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import Posts from "./Posts/Posts";
import {MypPostsPropsType} from "./MyPostsContainer";

const MyPosts: React.FC<MypPostsPropsType> = (props) => {

    let postsElements = props.posts.map(p => <Posts profile={props.profile} key={p.id} message={p.message} likeCounter={p.likeCounter} id={p.id}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const AddPost = () => {
        props.addPost()
    }

    const changeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
            <div className={s.container}>
                <h3 className={s.title}>Posts</h3>
                <div className={s.addNewPost}>
                    <textarea placeholder={"What are you thinking about?"} ref={newPostElement} onChange={changeText} value={props.newPostText}/>
                    <button onClick={AddPost}>Add post</button>
                </div>
                <div className={s.posts}>
                {postsElements}
                </div>
            </div>
    );
}

export default MyPosts;