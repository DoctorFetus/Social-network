import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import Posts, {PostsType} from "./Posts/Posts";
import {addPostCreator, updatePostTextCreator} from "../../../redux/redusers/profile-reducer";
import {ActionTypes} from "../../../redux/store";

type PostsProps = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: ActionTypes) => void
}

const MyPosts: React.FC<PostsProps> = (props) => {

    let postsElements = props.posts.map(p => <Posts message={p.message} likeCounter={p.likeCounter} id={p.id}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const AddPost = () => {
        const action = addPostCreator()
        props.dispatch(action)
    }

    const changeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const action = updatePostTextCreator(e.currentTarget.value)
        props.dispatch(action)
    }

    return (
            <div className={s.container}>
                <h3>My posts</h3>
                <div>
                    <textarea ref={newPostElement} onChange={changeText} value={props.newPostText}/>
                    <button onClick={AddPost}>Add post</button>
                    <button>Remove</button>
                </div>
                <div className={s.newPosts}>
                    New post
                </div>
                <div className={s.posts}>
                {postsElements}
                </div>
            </div>
    );
}

export default MyPosts;