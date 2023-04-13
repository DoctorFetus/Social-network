import React from "react";
import s from "./MyPosts.module.css"
import Posts from "./Posts/Posts";
import {PostsType} from "./Posts/Posts";
import posts from "./Posts/Posts";

type PostsProps = {
    posts: Array<PostsType>
}

const MyPosts: React.FC<PostsProps> = (props) => {

    let postsElements = props.posts.map(p => <Posts message={p.message} likeCounter={p.likeCounter} id={p.id}/>)

    return (
            <div className={s.container}>
                <h3>My posts</h3>
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
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