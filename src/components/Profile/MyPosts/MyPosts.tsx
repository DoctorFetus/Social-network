import React from "react";
import s from "./MyPosts.module.css"
import Posts from "./Posts/Posts";

const MyPosts = () => {

    let postData = [
        {id: 1, message: "Hi, how are you?", likeCounter: 15},
        {id: 2, message: "I am dead inside", likeCounter: 25}
    ]

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
                <Posts message={postData[0].message} likeCounter={postData[0].likeCounter} id={postData[0].id}/>
                <Posts message={postData[1].message} likeCounter={postData[1].likeCounter} id={postData[1].id}/>
            </div>
    );
}

export default MyPosts;